import { UnstyledButton, Group, ThemeIcon, Text } from '@mantine/core';
import {
  Article,
  CrownSimple,
  MaskSad,
  NumberNine,
  Smiley,
} from 'phosphor-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SiteLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  onNavigate?: () => void;
}

interface SiteLink {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}

function SiteLink({ icon, color, label, path, onNavigate }: SiteLinkProps) {
  const navigate = useNavigate();

  return (
    <UnstyledButton
      onClick={() => {
        if (onNavigate) onNavigate();
        navigate(path);
      }}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
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

export const sitesLinks: SiteLink[] = [
  { icon: <Smiley size={16} />, color: 'red', label: 'Jbzd', path: '/jbzd' },
  {
    icon: <Smiley size={16} />,
    color: 'yellow',
    label: 'Kwejk',
    path: '/kwejk',
  },
  {
    icon: <MaskSad size={16} />,
    color: 'dark',
    label: 'Demotywatory',
    path: '/demotywatory',
  },
  {
    icon: <CrownSimple size={16} />,
    color: 'gray',
    label: 'Mistrzowie',
    path: '/mistrzowie',
  },
  {
    icon: <NumberNine size={16} />,
    color: 'blue',
    label: '9gag',
    path: '/9gag',
  },
  {
    icon: <NumberNine size={16} />,
    color: 'red',
    label: '9gag NSFW',
    path: '/9gagnsfw',
  },
  {
    icon: <Article size={16} />,
    color: 'grape',
    label: 'Anonimowe',
    path: '/anonimowe',
  },
  {
    icon: <Smiley size={16} />,
    color: 'yellow',
    label: 'iFunny',
    path: '/ifunnyco',
  },
];

interface SitesProps {
  onNavigate: () => void;
}

const Sites = ({ onNavigate }: SitesProps) => {
  const links = sitesLinks.map((link) => (
    <SiteLink {...link} key={link.label} onNavigate={onNavigate} />
  ));
  return <div>{links}</div>;
};

export default Sites;
