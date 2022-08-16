import { UnstyledButton, Group, ThemeIcon, Text } from "@mantine/core";
import {
  Article,
  CrownSimple,
  MaskSad,
  NumberNine,
  Smiley,
} from "phosphor-react";
import React from "react";

interface SiteLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function SiteLink({ icon, color, label }: SiteLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <Smiley size={16} />, color: "red", label: "Jbzd" },
  { icon: <Smiley size={16} />, color: "yellow", label: "Kwejk" },
  { icon: <MaskSad size={16} />, color: "dark", label: "Demotywatory" },
  { icon: <CrownSimple size={16} />, color: "white", label: "Mistrzowie" },
  { icon: <NumberNine size={16} />, color: "blue", label: "9gag" },
  { icon: <NumberNine size={16} />, color: "red", label: "9gag NSFW" },
  { icon: <Article size={16} />, color: "grape", label: "Anonimowe" },
  { icon: <Smiley size={16} />, color: "yellow", label: "iFunny" },
];

export interface SitesProps {}

const Sites = ({}: SitesProps) => {
  const links = data.map((link) => <SiteLink {...link} key={link.label} />);
  return <div>{links}</div>;
};

export default Sites;
