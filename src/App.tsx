import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Stack,
  Switch,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { MoonStars, SunDim } from "phosphor-react";
import Sites from "./Sites";

function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
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
          width={{ base: 300 }}
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
                  {colorScheme === "dark" ? (
                    <SunDim size={16} />
                  ) : (
                    <MoonStars size={16} />
                  )}
                </ActionIcon>
              </Group>
              <div>
                Made with ♥️ by{" "}
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
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
