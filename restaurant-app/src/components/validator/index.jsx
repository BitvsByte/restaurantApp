import {useSearchParams} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {useEffect} from "react"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import './style.css'





function Validator() {

    const [query] = useSearchParams()
    const param = query.get('token')
    const navigate = useNavigate();
    

    useEffect(()=>{
        const fetchValidate = async ()=>{
            try{
                const res = await fetch(`http://localhost:4000/auth/validate?token=${param}`,{
                    method:'get',
                })
                const dat =await res.json()
            }catch(err){
                console.log(err)

            }
        }
        fetchValidate()
        
        setTimeout(
            ()=>{
                navigate("/");
            }, 4500
        );

    },[])


    return (
        <React.Fragment>
                    {/* <div>
            <Card style={{width:'18rem'}}>
                <Card.Img variant="top" src='' />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {`seras dirigido en breve`}
                    </Card.Text>
                </Card.Body>

            </Card>
        </div> */}
        <div>
            <h1 className="text-success">En breve podras continuar....</h1>
        </div>
        <div className="frame">
<div className="ball">
	
	<div className="slice s1"></div>
		<div className="slice s2"></div>
		<div className="slice s3"></div>
		<div className="slice s4"></div>
		<div className="slice s5"></div>
		<div className="slice s6"></div>
		<div className="slice s7"></div>
		<div className="slice s8"></div>
		<div className="slice s9"></div>
		<div className="slice s10"></div>
		<div className="slice s11"></div>
		<div className="slice s12"></div>
</div>
</div>




        </React.Fragment>
  








    )
}


export default Validator;