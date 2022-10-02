import { Container, Flex, HStack, Text, Image, Input, Button } from "@chakra-ui/react"
import { Aftertrusted } from "./afterglowal"
import { Homesec2 } from "./Home2"
import Pageforvideo from "./vidopage"


export function Homesec1() {
    return (
        <>
            <Flex color={{md:"black"}} pt={"100px"} display={{lg:"flex",md:"block"}} w={{lg:"100%"}} backgroundSize="cover"  backgroundRepeat="no-repeat" backgroundImage={{lg:"http://softnetdesigns.in/timely.png"}} overflow={"hidden"} h={{lg:"800px",md:"1000px"}}>
                <Container color={"white"} h={"auto"}  w="100%">
                    <div>
                        <Text fontSize={"14px"} color={"white"}><span style={{ color: "lightgreen" }}>Timely</span> time tracking software</Text>
                    </div>
                    <div >
                        <Text fontWeight={"bold"} fontSize={"60px"} color={"white"}>Say hello to <span style={{ color: "lightgreen" }}>automatic time tracking</span></Text>
                    </div>
                    <div>
                        <Text >Timely automates company time tracking, so you and your team can focus on the work that matters.</Text>
                    </div>
                    {/*  input and after input */}
                    <HStack ml={"18%"} color={"black"} w="500px" display={"flex"}>
                        < HStack w="70%">
                            <Input fontSize={"11px"} bg={"white"} type="email"  name="email" placeholder="Enter your work email"></Input>
                            </HStack>
                            <Button color={"white"} fontSize={"12px"} h={"27px"} bg="#001141" w={"auto"} position={"absolute"} left="370px">Start my free trial</Button>
                    </HStack>
                    <Container fontSize={"13px"} >
                        <div>
                            <Image src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg" loading="lazy" alt="" >
                            </Image>
                            <Text>Trusted by 5000+ businesses globally</Text>
                        </div>
                        <div ><Image mr={"-20px"} src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg" loading="lazy" alt=""></Image><div>Free 14-day trial — No credit cards needed</div></div><div class="bullet--item">
                            <Image src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg" loading="lazy" alt="" class="icon--point"></Image>
                            <div class="bullet-points">Reduce time tracking admin by 75%</div></div>
                    </Container>
                </Container>
                <Container w="100%">
                    <div>
                        <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.webp" width="702.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, (max-width: 1919px) 88vw, 1273.0234375px" srcset="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl-p-500.webp 500w, https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl-p-800.webp 800w, https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.webp 1405w" alt="" class="hero-new-img">
                        </Image>
                    </div>
                </Container>
            </Flex>

            <Homesec2/>
            <Pageforvideo/>
            <Aftertrusted/>
        </>
    )
} 


