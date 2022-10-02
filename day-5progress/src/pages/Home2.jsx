
import { Image, Link, HStack, VStack, Container, Text, Flex } from "@chakra-ui/react"
export function Homesec2() {
    return (
        <>
            <Container lineHeight={"30px"} mt={"100px"}>
                <VStack>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39954ae48af5bf_brainp.svg" loading="lazy" alt="Automate time tracking"
                    ></Image>
                    <Text fontWeight={"bold"} fontSize={"35px"} >Automate your time tracking</Text>
                </VStack>
                <VStack w="100%" height={"3em"} >
                    <h6 class="paragraph this--big this--section-centered">Forget timers, note taking and manual input—<strong>Timely</strong> can track time spent in every web and desktop app automatically for you. Get a precise daily record of all the time you spend in documents, meetings, emails, websites and video calls with zero effort. It’s all
                        <Link href="/our-privacy-promise" color={"purple.600"}>100% private to you</Link>.</h6>
                    <Link href="/memory-app" fontSize="small" color={"purple.600"}>How it all works</Link>
                </VStack>
            </Container>
            <Container alignItems="center" justifyContent="center" margin={"auto"} h="100px" w={"46px"}
                mt={"200px"}>
                <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951ee48af5c4_arr.svg" loading="lazy" alt=""></Image>
            </Container>
            {/* third section time project teams */}

            <HStack w={"80%"} alignItems="center" justifyContent="center" margin={"auto"} fontSize={"13px"} >
            <Container  w={'400px'}  >
                <Container w={"54px"}>
                <Image w={"25px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_AKFErLdPhfJGn--ZnZFBpeH1z7l7Gr2iBJc2CZCLg&s" alt="" ></Image>
                </Container>
                <Container  >
                    <Text fontWeight={"bold"} fontSize={"26px"}>Track time</Text>
                    <Container>Get the complete picture of your work day with zero effort.</Container>
                    <Link href="/features/automatic-time-tracking" color={"purple.600"}>Automate time tracking</Link>
                </Container>
            </Container>
            <Container  w={'400px'}  >
                <Container w={"54px"}>
                <Image w={"25px"} src="https://www.qrious.co.nz/hubfs/Qrious_Icons_FullSet_UltraViolet_Performance.png" alt="" ></Image>
                </Container>
                <Container  >
                    <Text fontWeight={"bold"} fontSize={"26px"}>Track projects</Text>
                    <Container>Monitor budgets, hours and activities in real time.</Container>
                    <Link href="/features/automatic-time-tracking" color={"purple.600"}>Run smarter projects</Link>
                </Container>
            </Container>
            <Container  w={'400px'}  >
                <Container w={"55px"}>
                <Image w={"30px"} src="https://media.glassdoor.com/sql/2561474/kingswood-group-squarelogo-1629894330332.png" alt="" ></Image>
                </Container>
                <Container  >
                    <Text fontWeight={"bold"} fontSize={"26px"}>Track teams</Text>
                    <Container>Get a complete overview of your team’s time and performance.</Container>
                    <Link href="/features/automatic-time-tracking" color={"purple.600"}>Lead happier teams</Link>
                </Container>
            </Container>
            </HStack>
        </>
    )
}
