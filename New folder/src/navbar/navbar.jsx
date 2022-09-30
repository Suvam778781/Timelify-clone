import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Link,
    Container,
    rightIcon,
    HStack,
    Button,
    Image
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { ChevronDownIcon } from "@chakra-ui/icons"
export function Navbar() {
    return (
        <>
            <HStack padding={"0px 100px 0px 100px"} display={{ md: 'none', lg: "flex", base: 'none' }} width="100%" height="80px" position="fixed" zIndex={2} bg="purple.600">
                <HStack fontSize="14px" color="white" fontFamily="Circularstd,sans-serif" w="50px" bg="purple.600" margin="auto" alignItems="center" width="100%" spacing={8}>
                    <Image src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39955aef8af720_timely-new-logo.svg" h="40px" marginBottom={6} w="90px" loading="lazy" alt="not" />
                    <Menu >
                        <MenuButton as={Link} >
                            Features
                            <ChevronDownIcon w={6} h={6} />
                        </MenuButton>
                        <MenuList color={"black"}>
                            <MenuItem>Track time</MenuItem>
                            <MenuItem>Track projects</MenuItem>
                            <MenuItem>Track teams</MenuItem>
                            <MenuItem>Track plan</MenuItem>
                            <MenuItem>Integration</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton as={Link} >
                            Solution
                            <ChevronDownIcon w={6} h={6} />
                        </MenuButton>
                        <MenuList display={"flex"} color={"black"}>
                            <div>
                                <MenuItem>Consulting firms</MenuItem>
                                <MenuItem>Software companies</MenuItem>
                                <MenuItem>Agencies</MenuItem>
                                <MenuItem>Designers & creatives</MenuItem>
                                <MenuItem>Lawyers</MenuItem>
                                <MenuItem>Accountants</MenuItem>
                            </div>
                            <div>
                                <MenuItem>Teams</MenuItem>
                                <MenuItem>Freelancers</MenuItem>
                                <MenuItem>Employees</MenuItem>
                                <MenuItem>Project managers</MenuItem>
                                <MenuItem>Remote workers</MenuItem>
                            </div>
                        </MenuList>
                    </Menu>
                    <Link as="button"> Pricing </Link>
                    <Menu >
                        <MenuButton as={Link} >
                            Resources
                            <ChevronDownIcon w={6} h={6} />
                        </MenuButton>
                        <MenuList display={"flex"} color={"black"}>
                            <div>
                                <MenuItem >Blog</MenuItem>
                                <MenuItem>Case Studies</MenuItem>
                                <MenuItem>Podcast</MenuItem>
                                <MenuItem>Books</MenuItem>
                                <MenuItem>Webinars</MenuItem>
                                <MenuItem>Time tracking guide</MenuItem>
                                <MenuItem>Podcasts</MenuItem>
                            </div>
                        </MenuList>
                    </Menu>
                    <a href="/talktosale" as="button"> Talk to sales </a>
                    <a href="/login" as="button"> Log in </a>
                </HStack>
                <HStack >
                    <Button fontSize={"14px"} height={"30px"} color={"black"} w="220px" mr={"10px"}>Start 14-day free trial</Button>
                    <img src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399529fb8af72e_made-by-dark2.svg" loading="lazy" alt="" ></img>
                </HStack>
            </HStack>
        </>
    )
}


//  <img src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.webp" width="702.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, (max-width: 1919px) 88vw, 1273.0234375px" srcset="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl-p-500.webp 500w, https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl-p-800.webp 800w, https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.webp 1405w" alt="" class="hero-new-img">

