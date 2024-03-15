import React from 'react'
import Checkout_ITEM from "./CheckoutItem"
import {Input} from "antd"
import axios from "axios"
import putNotification from "./Notification"

const LandingPage = () => {
  const [email, setEmail] = React.useState("")

  const send = async () => {
      try {
        putNotification("Subscribing...")
        const resp = await axios.post("https://localhost:8443/api/v1/newsletter", {email:email})

        if (resp.status===200){
          putNotification(resp.data)
          setEmail("")
        }
      } catch (error) {
        putNotification("!!Error!!", error.response?.data?.message)
      }


  }
    return (
      <div class="header">
      <div class="container">
        <div class="row">
                <div class="col-2">
                    <h1>Hand-picked style<br/> with you in mind</h1>
                    <p>Fashion friendly clothes for fashion enthusiasts.</p>
                    <a href="/store" class="btn">Explore Now &#8594;</a>
                    <h4>Subscribe to our Newsletter</h4>
                    <Input placeholder="email" value={email} type="your email" size="large"style={{marginBottom:"30%"}} onChange={(e) => setEmail(e.target.value)} onPressEnter={send}/>
                </div>
                <div class="col-2">
                    <img src="images/image1.png" width="800px"/>
                </div>
            </div>
        </div>  
    </div>

    )
}

export default LandingPage
