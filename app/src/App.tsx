import './App.css'
import {Text, Carousel, IconButton, Image, VStack, AspectRatio, Box, type IconButtonProps} from "@chakra-ui/react"
import dayjs from "dayjs";
import { forwardRef } from "react";
import {LuArrowLeft, LuArrowRight } from "react-icons/lu";

function App() {
  return (
    <>
      <VStack>
        <Carousel.Root
            slideCount={images.length}
            autoplay={{ delay: 2000 }}
            maxW="2xl"
            mx="auto"
            gap="4"
            position="relative"
            colorPalette="white"
        >
          <Carousel.Control gap="4" width="full" position="relative">
            <Carousel.PrevTrigger asChild>
              <ActionButton insetStart="4">
                <LuArrowLeft />
              </ActionButton>
            </Carousel.PrevTrigger>

            <Carousel.ItemGroup width="full">
              {images.map((cam, index) => (
                  <Carousel.Item key={index} index={index}>
                    <AspectRatio ratio={16 / 9} maxH="72vh" w="full">
                      <Image
                          src={cam.path}
                          alt={cam.name + " - " +cam.resort}
                          objectFit="contain"
                      />
                    </AspectRatio>
                    <Text>{cam.name} - {cam.resort}</Text>
                  </Carousel.Item>
              ))}
            </Carousel.ItemGroup>

            <Carousel.NextTrigger asChild>
              <ActionButton insetEnd="4">
                <LuArrowRight />
              </ActionButton>
            </Carousel.NextTrigger>

            <Box position="absolute" bottom="6" width="full">
              <Carousel.Indicators
                  transition="width 0.2s ease-in-out"
                  transformOrigin="center"
                  opacity="0.5"
                  boxSize="2"
                  _current={{ width: "10", bg: "colorPalette.subtle", opacity: 1 }}
              />
            </Box>
          </Carousel.Control>
        </Carousel.Root>
      </VStack>
    </>
  )
}

const date = dayjs(new Date()).format("DD-MM-YYYY");

const images = [
  {
    "resort" : "Hotham",
    "name" : "Big D",
    "path" : `/assets/hotham/big-d/${date}.jpg`
  },
  {
    "resort" : "Hotham",
    "name" : "Gotcha",
    "path" :`/assets/hotham/gotcha/${date}.jpg`
  },
  {
    "resort" : "Hotham",
    "name" : "Imagine",
    "path" : `/assets/hotham/imagine/${date}.jpg`
  },
  {
    "resort" : "Hotham",
    "name" : "Slalom Gully",
    "path" :`/assets/hotham/slalom-gully/${date}.jpg`
  },
  {
    "resort" : "Hotham",
    "name" : "Summit",
    "path" :`/assets/hotham/summit/${date}.jpg`
  },
  {
    "resort" : "Falls Creek",
    "name" : "Drovers Dream",
    "path" :`/assets/falls-creek/drovers/${date}.jpg`
  },
  {
    "resort" : "Falls Creek",
    "name" : "Main Street",
    "path" :`/assets/falls-creek/main-street/${date}.jpg`
  },
  {
    "resort" : "Falls Creek",
    "name" : "Ruined Castle",
    "path" :`/assets/falls-creek/ruined-castle/${date}.jpg`
  },
  {
    "resort" : "Falls Creek",
    "name" : "Towers",
    "path" :`/assets/falls-creek/towers/${date}.jpg`
  }
]

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
        <IconButton
            {...props}
            ref={ref}
            size="xs"
            variant="outline"
            rounded="full"
            position="absolute"
            zIndex="1"
            bg="bg"
        />
    )
  },
)


export default App
