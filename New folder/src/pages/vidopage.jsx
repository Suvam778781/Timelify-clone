import { Container, HStack, Image, Link, Spacer, VStack, Text } from "@chakra-ui/react"

export default function Pageforvideo() {


    return (
        <>
            <Container mt="100px" mb={"100px"} rotate={"90deg"}>
                <Image src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c5743d88a28b8_lines-home.svg">
                </Image>
            </Container >
            {/* heading and arrow logo */}
            <VStack lineHeight={"32px"} margin={"auto"} bgColor="purple.600" w={"100%"}>
                <VStack color={"white"}>
                    <Container m={"20px"} display={"flex"} margin="auto" w={"auto"}>
                        <Image w={"30px"} h="70px" src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/625c168b07e04cf345cd2b3d_tm-arrow-wh.svg" loading="lazy" alt="" ></Image>
                    </Container>
                    <HStack display={"block"} w="65%" margin="auto">
                        <Text fontSize={"40px"}>Connect your stack</Text><Text pt={"20px"} fontSize={"14px"}>Timely’s native integrations and open APIs let you easily connect data across you existing digital toolkit. Enjoy modern, automatic time tracking without changing workflows you’ve spent years perfecting.</Text>
                    </HStack>
                </VStack>

                {/* logo and link */}
                <VStack >
                    <HStack pt={"100px"} pb={"100px"} w={"100%"} gap={"60px"}>
                        <div><Link href="/integrations/zoom" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399507178afec0_622f69e00c9cf281783c6e63_60b773d26388125af692655e_zoom.png" loading="lazy" alt="" ></Image></Link></div>
                        <div><Link href="/integrations/zapier"><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995db068afecb_622f69e00c9cf2a3aa3c6e5c_60b773d26388128ce29265e3_zapier.png" loading="lazy" alt="" class="inte-logo iswhite"></Image></Link></div>
                        <div><Link href="/integrations/trello" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995d48d8afec2_622f69e00c9cf228763c6e5f_60b773d263881212a3926561_trello.png" loading="lazy" alt="" ></Image></Link></div>
                        <div ><Link href="/integrations/toggl" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39959cb08b0389_622f69e00c9cf20e073c75c5_toggl.svg" loading="lazy" alt=""></Image></Link></div>
                        <div><Link href="/integrations/todoist" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399551b88afec9_622f69e00c9cf211c53c6e61_60b773d26388125fe3926566_todois.png" loading="lazy" alt="" ></Image></Link></div>
                        <div ><Link href="/integrations/time-tracking-quickbooks" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39952c128afec1_622f69e00c9cf20fcd3c6e5d_60b773d2638812c090926634_quickbooks_logo.png" loading="lazy" alt="" ></Image></Link></div>
                    </HStack >
                    <HStack w={"100%"} pb={"100px"} gap={"60px"}>
                        <div ><Link href="/integrations/outlook" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995f1728afec3_622f69e00c9cf219633c6e62_60b773d26388126112926555_outlook.png" loading="lazy" alt=""></Image></Link></div>
                        <div><Link href="/integrations/office-365"><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995366e8afec5_622f69e00c9cf23dd63c6e5b_60b773d2638812391092655c_office365.png" loading="lazy" alt="" ></Image></Link></div>
                        <div><Link href="/integrations/jira"><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39955cba8afec8_622f69e00c9cf266013c6e5e_60b773d263881204bd92656c_jira.png" loading="lazy" alt="" ></Image></Link></div>
                        <div ><Link href="/integrations/harvest"><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399594708afead_622f69e00c9cf215b73c6e44_60b773d2638812a08e92656f_harvest.png" loading="lazy" alt=""></Image></Link></div>
                        <div ><Link href="/integrations/google-calendar" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399543808afeae_622f69e00c9cf22e8d3c6e48_60b773d26388128342926559_calendar.png" loading="lazy" alt="" ></Image></Link></div>
                        <div><Link href="/integrations/gmail" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399530e28afebb_622f69e00c9cf223073c6e4c_60b773d2638812105d926556_gmail.png" loading="lazy" alt="" ></Image></Link></div>
                    </HStack>
                    <HStack pb={"100px"} m="auto" w={"50%"} gap={"60px"}>
                        <div><Link href="/integrations/github"><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399545b18afea6_622f69e00c9cf271b93c6e46_60b773d26388129bba926569_github.png" loading="lazy" alt=""></Image></Link></div>
                        <div><Link href="/integrations/azure-ad" ><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39954a888afeac_622f69e00c9cf27e7c3c6e43_60b773d263881215e6926573_azuread.png" loading="lazy"></Image></Link></div>
                        <div><Link href="/integrations/asana"><Image w={"60px"} src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399535d98afeaf_622f69e00c9cf262c83c6e47_60b773d2638812deaf926564_asana.png" loading="lazy" alt=""></Image></Link></div>
                    </HStack>
                </VStack>
            </VStack>


            <GlobalBusiness/>
        </>
    )
}

function GlobalBusiness(){



    return (


        <>
        
        <Container>


            <Image w={"90px"} h={"200px"} borderRadius={"50%"} src="https://cdn.vectorstock.com/i/1000x1000/27/99/business-rank-line-icon-employee-nomination-sign-vector-31642799.webp">



            </Image>
        </Container>
        
        </>
    )
}