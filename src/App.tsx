import { useCallback, useState } from 'react';
import {
  ActionIcon,
  AppShell,
  Box,
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
import { useBearStore } from './store';

function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const onNavigate = useCallback(() => {
    window.scrollTo(0, 0);
    if (opened) {
      setOpened(false);
    }
  }, [opened, setOpened]);

  const store = useBearStore();

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
            <Sites onNavigate={onNavigate} />
          </Navbar.Section>
          <Navbar.Section>
            <Stack>
              <Group position="apart">
                Infinite scroll
                <Switch
                  checked={store.infiniteScroll}
                  onChange={(e) =>
                    store.setInfiniteScroll(e.currentTarget.checked)
                  }
                />
              </Group>
              <Group position="apart">
                Autoplay
                <Switch
                  checked={store.autoplay}
                  onChange={(e) => store.setAutoplay(e.currentTarget.checked)}
                />
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
                <Box
                  component="a"
                  sx={{ color: 'inherit ' }}
                  href="https://github.com/pr0gramista/meme-reader"
                >
                  pr0gramista
                </Box>
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
          <Route path="" element={<Site color="yellow" slug="kwejk" />} />
          <Route
            path="page/:page"
            element={<Site color="yellow" slug="kwejk" />}
          />
        </Route>
        <Route path="/jbzd">
          <Route path="" element={<Site color="red" slug="jbzd" />} />
          <Route path="page/:page" element={<Site color="red" slug="jbzd" />} />
        </Route>
        <Route path="/demotywatory">
          <Route path="" element={<Site color="dark" slug="demotywatory" />} />
          <Route
            path="page/:page"
            element={<Site color="dark" slug="demotywatory" />}
          />
        </Route>
        <Route path="/mistrzowie">
          <Route path="" element={<Site color="gray" slug="mistrzowie" />} />
          <Route
            path="page/:page"
            element={<Site color="gray" slug="mistrzowie" />}
          />
        </Route>
        <Route path="/anonimowe">
          <Route path="" element={<Site color="green" slug="anonimowe" />} />
          <Route
            path="page/:page"
            element={<Site color="green" slug="anonimowe" />}
          />
        </Route>
        <Route path="/ifunnyco">
          <Route path="" element={<Site color="yellow" slug="ifunnyco" />} />
          <Route
            path="page/:page"
            element={<Site color="yellow" slug="ifunnyco" />}
          />
        </Route>
        <Route path="/9gag">
          <Route path="" element={<Site color="dark" slug="9gag" />} />
          <Route
            path="page/:page"
            element={<Site color="dark" slug="9gag" />}
          />
        </Route>
        <Route path="/9gagnsfw">
          <Route path="" element={<Site color="pink" slug="9gagnsfw" />} />
          <Route
            path="page/:page"
            element={<Site color="pink" slug="9gagnsfw" />}
          />
        </Route>
      </Routes>
    </AppShell>
  );
}

export default App;
