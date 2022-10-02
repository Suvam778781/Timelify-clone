import { HStack, Image, Container, Text, VStack, Spacer, Input, Button } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom"

export function Aftertrusted() {


    return (


        <>
            <HStack p={"70px"}>
                <div w={"50%"}>

                    <Image borderRadius={"13px"} w="80%" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39956f438af4f5_global.jpg">
                    </Image>
                </div>
                <Container textAlign={"start"} w={"60%"}>
                    <Text textAlign={"start"} fontSize="19px" w="550px" fontWeight="bold" >“Timely is helping our organization transform time tracking from a chore to a simple review process.”</Text>
                    <Image mt={"20px"} mb="30px" w={"140px"} h="" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39952ab78af332_grant-thornton-vector-logo.svg"></Image>
                    <Text lineHeight={"25px"} textAlign={"start"}>See how <span style={{ color: "purple", fontSize: "17px", fontWeight: "bolder" }}>Grant Thornton</span> leverages Timely’s automation to increase time tracking accuracy and efficiency across its Legal and Finance, Tax and Regulatory, and IT departments.</Text>
                    <Container w="50%" color={"purple.600"} fontWeight="medium" textDecoration={"underline"} fontSize={"13px"} mt={"30px"}> <a href="/" fontSize={"7px"}>Grant Thornton case study</a></Container>
                </Container>

            </HStack>

            {/* Achivement of timelyapp */}
            <HStack ml={"36px"} mt={"40px"} mb={"40px"}>
                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg" loading="lazy" alt="" ></Image>
                </Container>

                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b36657dfae2feee178fee9_TimeTracking_MomentumLeader_Leader.svg" loading="lazy" alt="" class="g2-badge"></Image>
                </Container>
                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg" loading="lazy" alt="" class="g2-badge"></Image>
                </Container>
                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995b0a08af4da_loveus.svg" loading="lazy" alt="Users Love us! G2" ></Image>
                </Container>
                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg" loading="lazy" alt="" ></Image>
                </Container>
                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg" loading="lazy" alt="" ></Image>
                </Container>
                <Container>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg" loading="lazy" alt=""></Image>
                </Container>
            </HStack>

            {/* Achivement End */}
            <VStack color={"white"} backgroundImage="https://images.ctfassets.net/4e8xy1krjypg/3rqMLtN3ADB8YYw38BuSDk/a7f6feac2264eeb9a3e46ab867c53bd5/fs-blog-_better_digital_customer_experience__1_.svg" w="100%" h={"350px"}>
                <Container color={"white"} fontWeight="medium" mt={"6px"} fontSize={"50px"}>Try <span style={{ color: "cyan" }}>Timely</span> for free!</Container>
                <Container class="cta-p white-cta this--wide">Discover the power of Timely's automated time tracking with a 14-day free trial</Container>
                <Container margin={"auto"} display="flex" w="70%">

                    < HStack margin={"auto"} mt={"40px"} w="75%">

                        <Input height={"46px"} color={"black"} fontSize={"11px"} bg={"white"} type="email" name="email" placeholder="Enter your work email"></Input>

                        <Button color={"white"} fontSize={"12px"} h={"35px"} bg="#001141" w={"auto"} position={"absolute"} left="670px">Start my free trial</Button>
                    </HStack>

                </Container>

                <HStack fontSize={"12px"} fontFamily="revert " pt={"25px"}>
                    <HStack display="flex"><Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995099e8af447_light-bulb.svg" loading="lazy" alt=""></Image><div >Trusted by 5000+ businesses globally</div></HStack><HStack><Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951c448af440_thumb-down.svg" loading="lazy" alt="" ></Image><div >Free 14-day trial — No credit cards needed</div></HStack><HStack ><Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995099e8af447_light-bulb.svg" loading="lazy" alt=""></Image><div>Reduce time tracking admin by 75%</div></HStack>
                </HStack>
                <HStack>
                    <HStack mt={"40px"}>
                        <Text>
                            20 people or more?
                        </Text>  <Text textDecoration={"underline"}><a href="/sales">Get a personalized introduction to Timely</a></Text>
                    </HStack>
                </HStack>
            </VStack>
            {/* Footer part */}
           <HStack fontSize={"12px"} width={"100%"}>

            <div display="flex" margin="auto" width="100%">
  
            <div  ><a href="/about" class="timely-logo-footer w-inline-block"><Image ml={"80px"} mb={"50px"}   mt={"-190px"} src="https://assets-global.website-files.com/622f69e00c9cf2599f3c60d5/62556ba13d84b67cea42af8a_made-by-dark.svg" loading="lazy" width="130" alt="Timely time tracking software" ></Image></a></div>
              <HStack ml={"80px"}>
                <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg" loading="lazy" alt="G2 - Leader" ></Image><Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg" loading="lazy" alt="G2 - Best usability" ></Image><Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg" loading="lazy" alt="G2 - Most implementable " ></Image><Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg" loading="lazy" alt="G2 - Best Relationship" class="g2badge-footer"></Image> 
              </HStack>
            </div>
            <VStack pl={"200px"}>
                <HStack margin={"auto"} display="flex" w={"100%"} >
                    <VStack align={"flex-start"} w={"170px"} ><div ><Text fontSize={"20px"} fontWeight="bold" >Features</Text></div>
                        <div><a href="/features/automatic-time-tracking">Track time</a>
                        </div>
                        <div ><a href="/features/track-projects" target="_blank">Track projects</a>
                        </div><div ><a href="/features/track-teams" target="_blank" >Track teams</a></div>
                        <div ><a href="/features/planning" class="footer--link">Track plans</a></div>
                        <div class="footer--item"><a href="/our-privacy-promise" target="_blank">Our privacy promise</a></div>
                    </VStack>
                    <VStack align={"flex-start"} w={"170px"}>
                        <div class="footer--item"><Text fontSize={"20px"} fontWeight="bold">Solutions</Text></div><div class="footer--item"><a href="/solutions/consulting-firms" target="_blank">Consulting firms</a></div>
                        <div ><a href="/solutions/software-companies" target="_blank">Software companies</a></div><div class="footer--item"><a href="/solutions/agencies" target="_blank" class="footer--link">Agencies</a></div>
                        <div><a href="/solutions/designers" target="_blank">Designers and creatives</a></div><div><a href="/solutions/lawyers" target="_blank">Lawyers</a></div>
                        <div><a href="/solutions/teams" target="_blank" class="footer--link">Teams</a></div>
                    </VStack>


                    <VStack align={"flex-start"} w={"170px"}>
                        <div><Text fontSize={"20px"} fontWeight="bold">Resources</Text></div><div class="footer--item"><a href="/blog" target="_blank" >Blog</a></div>
                        <div><a href="/case-studies" target="_blank" >Case studies</a></div>
                        <div ><a href="/podcasts" target="_blank" >Podcast</a></div>
                        <div class="footer--item"><a href="/webinars" target="_blank">Webinars</a></div>
                        <div class="footer--item"><a href="/guides/time-tracking" target="_blank">Time tracking guide</a></div>
                        <div class="footer--item"><a href="https://support.timelyapp.com/en/" >Support</a></div>
                    </VStack>

                </HStack>
                {/* Second part */}

                <HStack pt={"30px"} display="flex" w={"100%"}>
                    <VStack textAlign={"start"} align={"flex-start"} w={"170px"}>
                        <div ><div class="footer--item"><Text fontSize={"20px"} fontWeight="bold">Integrations</Text></div>
                            <div class="footer-cms-colection w-dyn-list"><div role="list" class="footer-item-grid w-dyn-items"><div role="listitem"><div ><a href="/integrations/google-calendar" target="_blank">Google Calendar</a></div></div>
                                <div ><div><a href="/integrations/outlook" target="_blank">Outlook</a></div></div>
                                <div ><div class="footer--item"><a href="/integrations/time-tracking-quickbooks" target="_blank" class="footer--link">QuickBooks</a></div></div><div role="listitem" ><div class="footer--item"><a href="/integrations/zapier" target="_blank" class="footer--link">Zapier</a></div></div><div role="listitem" class="footer-collection w-dyn-item"><div class="footer--item"><a href="/integrations/zoom" target="_blank" class="footer--link">Zoom</a></div></div></div></div>
                            <div ><a href="/integrations" target="_blank">See all integrations</a></div>
                        </div>
                    </VStack>

                    <VStack textAlign="start" align={"flex-start"} w={"170px"}>

                        <Text fontSize={"20px"} fontWeight="bold">Compare</Text>
                        <div><div role="list" class="footer-item-grid w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="/alternative/rescuetime" target="_blank" ><div >Timely vs</div><div class="footer-txt">RescueTime</div></a></div><div role="listitem" class="w-dyn-item"><a href="/alternative/harvest" target="_blank" class="footer--item is-vs w-inline-block"><div class="footer-txt">Timely vs</div>
                            <div >Harvest</div></a></div>
                            <div class="w-dyn-item"><a href="/alternative/tsheets" target="_blank"><div class="footer-txt">Timely vs</div><div >TSheets</div></a></div>
                            <div ><a href="/alternative/clockify" target="_blank" ><div >Timely vs</div><div >Clockify</div></a></div><div role="listitem" ><a href="/alternative/toggl" target="_blank" ><div >Timely vs</div><div>Toggl</div></a></div></div>
                        </div>
                    </VStack>

                    <VStack align={"flex-start"} w={"170px"}>

                        <div class="footer--item"><Text fontSize={"20px"} fontWeight="bold">About Memory</Text></div><div><a href="/about">About us</a></div><div><a href="/jobs" target="_blank">Jobs - <span >We're hiring!</span></a></div><div class="footer--item"><a href="/manifesto" target="_blank" class="footer--link">Manifesto</a></div><div ><a href="/downloads" target="_blank">Download our apps</a></div><div ><a href="https://dev.timelyapp.com/" target="_blank" class="footer--link">API docs</a></div><div class="footer--item"><a href="/memory-app" target="_blank" >Memory app</a></div><div ><a href="/contact" target="_blank">Contact us</a></div><div><a href="/sitemap" target="_blank">Sitemap</a></div>
                    </VStack>
                </HStack>

            </VStack>

</HStack>
        </>

    )
}