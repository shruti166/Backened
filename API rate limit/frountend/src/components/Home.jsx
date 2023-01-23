import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from "react";

export default function Home() {
    const [msg, setMsg] = useState("");
    const fetchAPI = async() => {
        await fetch('http://localhost:8000/api').then((res)=> {
            
            
        }).then((data)=> setMsg(data));
        console.log(msg);
        }
    
  return <div>
    <Button onClick={fetchAPI}>
        CLICK ME
    </Button>
  </div>;
}
