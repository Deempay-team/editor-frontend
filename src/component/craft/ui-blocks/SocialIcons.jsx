import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPicker from "@/components/ui/ColorPicker.jsx";
import { Input } from "@/components/ui/input.jsx";
import { FacebookLogo, TwitterLogo, WhatsAppLogo } from "@/assets/icons";
import { InstagramLogo } from "@/assets/icons";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SocialIcons = ({
  showFacebook,
  facebookLink,
  iconColor = "#111111",
  iconHoverColor,
  iconSize = 16,
  showInstagram,
  instagramLink,
  showTwitter,
  twitterLink,
  showWhatsApp,
  whatsAppLink,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const [facebookHover, setFacebookHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [whatsAppHover, setWhatsAppHover] = useState(false);

  const iconSizeValue = parseInt(iconSize);
  const [iconContainerSize, setIconContainerSize] = useState(38);

  useEffect(() => {
    setIconContainerSize(iconSizeValue + 22);
  }, [iconSize]);

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className="flex items-center space-x-3 mt-2"
    >
      {/* FacebookLogo */}
      {showFacebook && (
        <Link href={facebookLink} target="_blank">
          <div
            className="rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{
              width: `${iconContainerSize}px`,
              height: `${iconContainerSize}px`,
              border: `0.79px solid ${
                facebookHover ? iconHoverColor : iconColor
              }`,
            }}
            onMouseEnter={() => setFacebookHover(true)}
            onMouseLeave={() => setFacebookHover(false)}
          >
            <FacebookLogo
              width={iconSizeValue}
              height={iconSizeValue}
              className="transition-colors duration-300"
              style={{
                color: facebookHover ? iconHoverColor : iconColor, // icon turns white on hover
              }}
            />
          </div>
        </Link>
      )}

      {/* Instagram */}
      {showInstagram && (
        <Link href={instagramLink} target="_blank">
          <div
            className="rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{
              width: `${iconContainerSize}px`,
              height: `${iconContainerSize}px`,
              border: `0.79px solid ${
                instagramHover ? iconHoverColor : iconColor
              }`,
            }}
            onMouseEnter={() => setInstagramHover(true)}
            onMouseLeave={() => setInstagramHover(false)}
          >
            <InstagramLogo
              width={iconSizeValue}
              height={iconSizeValue}
              className="transition-colors duration-300"
              style={{
                color: instagramHover ? iconHoverColor : iconColor,
              }}
            />
          </div>
        </Link>
      )}

      {/* Twitter */}
      {showTwitter && (
        <Link href={twitterLink} target="_blank">
          <div
            className="rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{
              width: `${iconContainerSize}px`,
              height: `${iconContainerSize}px`,
              border: `0.79px solid ${
                twitterHover ? iconHoverColor : iconColor
              }`,
            }}
            onMouseEnter={() => setTwitterHover(true)}
            onMouseLeave={() => setTwitterHover(false)}
          >
            <TwitterLogo
              width={iconSizeValue}
              height={iconSizeValue}
              className="transition-colors duration-300"
              style={{
                color: twitterHover ? iconHoverColor : iconColor,
              }}
            />
          </div>
        </Link>
      )}

      {/* WhatsApp */}
      {showWhatsApp && (
        <Link href={whatsAppLink} target="_blank">
          <div
            className="rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{
              width: `${iconContainerSize}px`,
              height: `${iconContainerSize}px`,
              border: `0.79px solid ${
                whatsAppHover ? iconHoverColor : iconColor
              }`,
            }}
            onMouseEnter={() => setWhatsAppHover(true)}
            onMouseLeave={() => setWhatsAppHover(false)}
          >
            <WhatsAppLogo
              width={iconSizeValue}
              height={iconSizeValue}
              className="transition-colors duration-300"
              style={{
                color: whatsAppHover ? iconHoverColor : iconColor,
              }}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export const SocialIconsSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Card>
      <CardContent className="space-y-4 mt-4">
        <Tabs defaultValue="visibility" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="visibility">Visibility</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
          </TabsList>

          {/* === Visibility & Links === */}
          <TabsContent value="visibility" className="space-y-4 mt-4">
            <Accordion type="single" collapsible className="w-full">
              {/* Facebook */}
              <AccordionItem value="facebook">
                <AccordionTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                  Facebook
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                    <Label>Show Facebook</Label>
                    <Switch
                      checked={props.showFacebook}
                      onCheckedChange={(v) =>
                        setProp((p) => (p.showFacebook = v))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Facebook Link</Label>
                    <Input
                      className="w-full"
                      value={props.facebookLink}
                      onChange={(e) =>
                        setProp((p) => (p.facebookLink = e.target.value))
                      }
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Instagram */}
              <AccordionItem value="instagram">
                <AccordionTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                  Instagram
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                    <Label>Show Instagram</Label>
                    <Switch
                      checked={props.showInstagram}
                      onCheckedChange={(v) =>
                        setProp((p) => (p.showInstagram = v))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Instagram Link</Label>
                    <Input
                      className="w-full"
                      value={props.instagramLink}
                      onChange={(e) =>
                        setProp((p) => (p.instagramLink = e.target.value))
                      }
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Twitter */}
              <AccordionItem value="twitter">
                <AccordionTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                  Twitter
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                    <Label>Show Twitter</Label>
                    <Switch
                      checked={props.showTwitter}
                      onCheckedChange={(v) =>
                        setProp((p) => (p.showTwitter = v))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Twitter Link</Label>
                    <Input
                      className="w-full"
                      value={props.twitterLink}
                      onChange={(e) =>
                        setProp((p) => (p.twitterLink = e.target.value))
                      }
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* WhatsApp */}
              <AccordionItem value="whatsapp">
                <AccordionTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
                  WhatsApp
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50">
                    <Label>Show WhatsApp</Label>
                    <Switch
                      checked={props.showWhatsApp}
                      onCheckedChange={(v) =>
                        setProp((p) => (p.showWhatsApp = v))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>WhatsApp Link</Label>
                    <Input
                      className="w-full"
                      value={props.whatsAppLink}
                      onChange={(e) =>
                        setProp((p) => (p.whatsAppLink = e.target.value))
                      }
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Icon Size */}
            <div className="space-y-2 pt-2 cursor-pointer">
              <Label>Icon Size</Label>
              <div className="flex items-center gap-2">
                <Slider
                  defaultValue={[parseInt(props.iconSize)]}
                  min={10}
                  max={50}
                  step={1}
                  onValueChange={(v) => setProp((p) => (p.iconSize = v[0]))}
                />
                <Input
                  type="number"
                  min={10}
                  max={30}
                  className="w-20 h-8 text-right"
                  value={parseInt(props.iconSize)}
                  onChange={(e) =>
                    setProp((p) => (p.iconSize = parseInt(e.target.value)))
                  }
                />
              </div>
            </div>
          </TabsContent>

          {/* === Style Tab === */}
          <TabsContent value="style" className="space-y-4 mt-4">
            <ColorPicker
              label="Icon Color"
              value={props.iconColor}
              onChange={(val) => setProp((p) => (p.iconColor = val))}
            />
            <ColorPicker
              label="Hover Color"
              value={props.iconHoverColor}
              onChange={(val) => setProp((p) => (p.iconHoverColor = val))}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

SocialIcons.craft = {
  props: {
    showFacebook: true,
    facebookLink: "https://www.facebook.com",
    showInstagram: true,
    instagramLink: "https://www.instagram.com",
    showTwitter: true,
    twitterLink: "https://www.twitter.com",
    showWhatsApp: true,
    whatsAppLink: "https://www.whatsapp.com",
    iconColor: "#111111",
    iconHoverColor: "#312f2f",
    iconSize: 16,
  },
  related: {
    settings: SocialIconsSettings,
  },
};
