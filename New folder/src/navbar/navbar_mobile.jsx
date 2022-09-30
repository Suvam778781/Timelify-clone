import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons"
import { IconButton, Menu, MenuButton,MenuItem, MenuList } from "@chakra-ui/react"

export function Navbarm(){
return(
<Menu >
  <MenuButton w={"20px"} border="none" color={"white"} h={'40px'}display={{lg:"none",md:"flex"}} mr="-1.5" 
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList width={"100%"}>
    <MenuItem width={"100%"} icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File... IconButt
    </MenuItem>
  </MenuList>
</Menu>
)
}