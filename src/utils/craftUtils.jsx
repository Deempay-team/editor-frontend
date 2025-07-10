import { getRandomId } from "@craftjs/utils";
import copy from 'copy-to-clipboard';
import lz from "lzutf8";


/**
 * Handle copy and past nodes
 */
const fromEntries = (pairs) => {
    if (Object.fromEntries) {
      return Object.fromEntries(pairs);
    }
    return pairs.reduce(
      (accum, [id, value]) => ({
        ...accum,
        [id]: value,
      }),
      {}
    );
  };


  // to copy a node
const getCloneTree = (node, query, tree) => {
    const newNodes = {};
    const changeNodeId = (node, newParentId) => {
      const newNodeId = getRandomId();
      const childNodes = node.data.nodes.map((childId) =>
        changeNodeId(tree.nodes[childId], newNodeId)
      );
      const linkedNodes = Object.keys(node.data.linkedNodes).reduce((acc, id) => {
        const newLinkedNodeId = changeNodeId(
          tree.nodes[node.data.linkedNodes[id]],
          newNodeId
        );
        return {
          ...acc,
          [id]: newLinkedNodeId,
        };
      }, {});
  
      let tmpNode = {
        ...node,
        id: newNodeId,
        data: {
          ...node.data,
          parent: newParentId || node.data.parent,
          nodes: childNodes,
          linkedNodes,
        },
      };
      let freshNode = query.parseFreshNode(tmpNode).toNode();
      newNodes[newNodeId] = freshNode;
      return newNodeId;
    };
  
    const rootNodeId = changeNodeId(tree.nodes[tree.rootNodeId]);
    return {
      rootNodeId,
      nodes: newNodes,
    };
  };
  


  // to save as a template
  //id = nodeId to copy
  export const copyNodeTree = (id, query) => {
    const tree = query.node(id).toNodeTree();
    const nodePairs = Object.keys(tree.nodes).map((id) => [
      id,
      query.node(id).toSerializedNode(),
    ]);
    const serializedNodesJSON = JSON.stringify(fromEntries(nodePairs));

    const saveData = {
      rootNodeID: tree.rootNodeId,
      nodes: serializedNodesJSON,
    };


    //save to your database
    localStorage.setItem("template", JSON.stringify(saveData));


    const jsonString = JSON.stringify(saveData);

    // const ks = query.node(id).childNodes()[0];
    // console.log("ks", ks);

    copy(lz.encodeBase64(lz.compress(JSON.stringify(saveData))));

    
    //copy(JSON.stringify(saveData));
    // console.log("Saved template:", saveData);
    // console.log("jsonString Data", jsonString);


    return {
        saveData: saveData,
        jsonString: jsonString,
    };
  };


  // add templates where you want
  // id = node id to paste
  // query = query object from craftjs
  // actions = actions object from craftjs
  // node = can be null
  // template = template to paste
  export const pasteNodeTree = (id, query, actions, node, template) => {

    //const template = ``

    if (!template) {
        console.error("No template found");
        return;
      }

      // get the template from your database
    //const getData = localStorage.getItem("template");

    // decompress the data
    const getData = lz.decompress(lz.decodeBase64(template));
      
    const data = JSON.parse(getData);

    // get the template from your database
    //const data = template;
    //const data = template;
    console.log("template", template);
    console.log("__________________________+");
    console.log("getData", getData);
    console.log("++++_________________++++++++++++");
    console.log("passde-data", data);

    
    const newNodes = JSON.parse(data.nodes);
    const nodePairs = Object.keys(newNodes).map((id) => {
      let nodeId = id;
  
      return [
        nodeId,
        query
          .parseSerializedNode(newNodes[id])
          .toNode((node) => (node.id = nodeId)),
      ];
    });


    const tree = {
      rootNodeId: data.rootNodeID,
      nodes: fromEntries(nodePairs),
    };

    const newTree = getCloneTree(node, query, tree);
    // add templates where you want
    // actions.addNodeTree(newTree, id, 0);
    actions.addNodeTree(newTree, id);
    // actions.selectNode(newTree.rootNodeId);
  
  };
  