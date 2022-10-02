import { Link, Image, Input, Button, Text, Container, HStack, Spacer, VStack } from "@chakra-ui/react"
import { useState } from "react"
export default function Login() {
      const [password, setpass] = useState("")
      const [email, setemail] = useState("")
      function handlechange1(e) {
            setemail(e.target.value)
      }
      function handlechange2(e) {
            setpass(e.target.value)
      }
      console.log(email,password)

      const  handlesubmit=()=>{
     
      }
      return (
            <>
                  <HStack pt={100} w={"100%"} >
                        <Container ml={"20px"}>
                              <Link href="#">
                                    <Image ml={{ base: "60px", md: "20px" }} src="https://d1luwo5u9zpc4i.cloudfront.net/assets/memory_logo-f1db7b16e667aab7b9a607429d44d5cc17125da4f36faac751017cdb71ea8ac2.svg"></Image>
                              </Link>
                        </Container>
                        <Container margin={"auto"} display="flex" w="50%" >

                              <Link href="/"><Image pl={"-70px"} w={"50px"} h={"50px"} borderRadius="35%" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/memory_apps/timely_icon-0009454e9497f1cb2a0f9042037156a62c31421032858278d5002aae979084a2.svg"></Image></Link>
                        </Container>

                  </HStack>
                  <HStack>
                        <Container w={"50%"} lineHeight="40px">


                              <Text color={"purple.600"} mb="20px" mt={"20px"} fontSize="30px">Top rated time tracking</Text>
                              <HStack>
                                    <Container>
                                          <Image alt="Timely is a leader in Time Tracking on G2" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_leader_2022-4989cf71ff2b88b58b3df99236eb51391394fb1b9aba84d52b9c6d200f326f86.svg" class="g2-badge" width="90px" height="100px"></Image>
                                    </Container>
                                    <Container>
                                          <Image alt="Timely is a leader in Most Implementable Time Tracking on G2" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_users_love_us-2008b519df49af90dcfa7db4b5fe13c8ec24ced0348f0a6bd039711ad8bbffc7.svg" class="g2-badge" width="116px" height="150px"></Image>
                                    </Container>
                                    <Container>
                                          <Image alt="Timely is a leader in Time Tracking with Best Usability on G2" src="https://d1luwo5u9zpc4i.cloudfront.net/assets/g2/g2_badge_usability_2022-9131129e6af4167315ef22db0d53e5335fe1d6333d95f91c1deb0ff454165883.svg" class="g2-badge" width="116px" height="150px"></Image>
                                    </Container>
                              </HStack>


                              <h3>“The best way to measure exactly where your time goes.”</h3>
                              <span >Brian,</span>
                              Accountant

                              <h3>“Timely takes a load off my brain.”</h3>

                              <span >Erik,</span>
                              Digital Designer

                              <h3>“Easy to use and I love the project level summaries.”</h3>

                              <span class="review-author-name">Jonathan,</span>
                              Software Engineer
                        </Container>

                        <VStack rowGap={"20px"} w="50%">


                              <Input w={"450px"} placeholder="Enter email" onChange={handlechange1}>

                              </Input>


                              <Input w={"450px"} placeholder="Enter password" name="password" value={password} onChange={handlechange2}>
                              </Input>

                              <Button w={"200px"} onClick={"handlesubmit"} name="email" value={email} bg={"purple.600"}>Login</Button>

                        </VStack>
                  </HStack>
            </>
      )
}