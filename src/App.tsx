import { useState } from 'react';
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Stack,
  Switch,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { MoonStars, SunDim } from 'phosphor-react';
import Sites from './Sites';
import { Route, Routes } from 'react-router-dom';
import Site from './Site';

function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="xs"
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      header={
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>Meme Reader</Text>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          width={{ sm: 200, lg: 300 }}
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
        >
          <Navbar.Section grow mt="md">
            <Sites />
          </Navbar.Section>
          <Navbar.Section>
            <Stack>
              <Group position="apart">
                Infinite scroll
                <Switch />
              </Group>
              <Group position="apart">
                Autoplay
                <Switch />
              </Group>
              <Group position="apart">
                Theme
                <ActionIcon
                  variant="default"
                  onClick={() => toggleColorScheme()}
                  size={30}
                >
                  {colorScheme === 'dark' ? (
                    <SunDim size={16} />
                  ) : (
                    <MoonStars size={16} />
                  )}
                </ActionIcon>
              </Group>
              <div>
                Made with ♥️ by{' '}
                <a href="https://github.com/pr0gramista/meme-reader">
                  pr0gramista
                </a>
              </div>
            </Stack>
          </Navbar.Section>
        </Navbar>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path="/kwejk">
          <Route path="" element={<Site slug="kwejk" />} />
          <Route path="page/:page" element={<Site slug="kwejk" />} />
        </Route>
        <Route path="/jbzd">
          <Route path="" element={<Site slug="jbzd" />} />
          <Route path="page/:page" element={<Site slug="jbzd" />} />
        </Route>
        <Route path="/demotywatory">
          <Route path="" element={<Site slug="demotywatory" />} />
          <Route path="page/:page" element={<Site slug="demotywatory" />} />
        </Route>
        <Route path="/mistrzowie">
          <Route path="" element={<Site slug="mistrzowie" />} />
          <Route path="page/:page" element={<Site slug="mistrzowie" />} />
        </Route>
        <Route path="/anonimowe">
          <Route path="" element={<Site slug="anonimowe" />} />
          <Route path="page/:page" element={<Site slug="anonimowe" />} />
        </Route>
        <Route path="/ifunnyco">
          <Route path="" element={<Site slug="ifunnyco" />} />
          <Route path="page/:page" element={<Site slug="ifunnyco" />} />
        </Route>
        <Route path="/9gag">
          <Route path="" element={<Site slug="9gag" />} />
          <Route path="page/:page" element={<Site slug="9gag" />} />
        </Route>
        <Route path="/9gagnsfw">
          <Route path="" element={<Site slug="9gagnsfw" />} />
          <Route path="page/:page" element={<Site slug="9gagnsfw" />} />
        </Route>
      </Routes>
    </AppShell>
  );
}

export default App;
