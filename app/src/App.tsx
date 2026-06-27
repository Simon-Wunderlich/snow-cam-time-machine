import './App.css'
import {Text, Carousel, IconButton, Image, VStack} from "@chakra-ui/react"
import dayjs from "dayjs";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

function App() {
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

  return (
    <>
      <VStack>
        <Text textStyle={"2xl"}>This time last year</Text>
        <Carousel.Root slideCount={images.length} maxW="md" mx="auto">
          <Carousel.ItemGroup>
            {images.map((image, index) => {
              return <Carousel.Item index={index}>
                <Image src={image.path}/>
                <Text>{image.name} - {image.resort}</Text>
              </Carousel.Item>
            })}
          </Carousel.ItemGroup>
          <Carousel.Control justifyContent="center" gap="4">
            <Carousel.PrevTrigger asChild>
              <IconButton size="xs" variant="ghost">
                <LuChevronLeft />
              </IconButton>
            </Carousel.PrevTrigger>

            <Carousel.Indicators />

            <Carousel.NextTrigger asChild>
              <IconButton size="xs" variant="ghost">
                <LuChevronRight />
              </IconButton>
            </Carousel.NextTrigger>
          </Carousel.Control>
        </Carousel.Root>
      </VStack>
    </>
  )
}

export default App
