import {useSearchParams} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {useEffect} from "react"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import './style.scss'





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
        <div className="validate_container">
          <div>
            <h1 className="text-success">En breve podras continuar....</h1>
          </div>
          <div className="watch_container">
            <div id="watch">
              <div className="frame-face"></div>
              <ul className="minute-marks">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="digital-wrap">
                <ul className="digit-hours">
                  <li>23</li>
                  <li>00</li>
                  <li>01</li>
                  <li>02</li>
                  <li>03</li>
                  <li>04</li>
                  <li>05</li>
                  <li>06</li>
                  <li>07</li>
                  <li>08</li>
                  <li>09</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li>18</li>
                  <li>19</li>
                  <li>20</li>
                  <li>21</li>
                  <li>22</li>
                </ul>
                <ul className="digit-minutes">
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li>18</li>
                  <li>19</li>
                  <li>20</li>
                  <li>21</li>
                  <li>22</li>
                  <li>23</li>
                  <li>24</li>
                  <li>25</li>
                  <li>26</li>
                  <li>27</li>
                  <li>28</li>
                  <li>29</li>
                  <li>30</li>
                  <li>31</li>
                  <li>32</li>
                  <li>33</li>
                  <li>34</li>
                  <li>35</li>
                  <li>36</li>
                  <li>37</li>
                  <li>38</li>
                  <li>39</li>
                  <li>40</li>
                  <li>41</li>
                  <li>42</li>
                  <li>43</li>
                  <li>44</li>
                  <li>45</li>
                  <li>46</li>
                  <li>47</li>
                  <li>48</li>
                  <li>49</li>
                  <li>50</li>
                  <li>51</li>
                  <li>52</li>
                  <li>53</li>
                  <li>54</li>
                  <li>55</li>
                  <li>56</li>
                  <li>57</li>
                  <li>58</li>
                  <li>59</li>
                  <li>00</li>
                  <li>01</li>
                  <li>02</li>
                  <li>03</li>
                  <li>04</li>
                  <li>05</li>
                  <li>06</li>
                  <li>07</li>
                  <li>08</li>
                  <li>09</li>
                </ul>
                <ul className="digit-seconds">
                  <li>20</li>
                  <li>21</li>
                  <li>22</li>
                  <li>23</li>
                  <li>24</li>
                  <li>25</li>
                  <li>26</li>
                  <li>27</li>
                  <li>28</li>
                  <li>29</li>
                  <li>30</li>
                  <li>31</li>
                  <li>32</li>
                  <li>33</li>
                  <li>34</li>
                  <li>35</li>
                  <li>36</li>
                  <li>37</li>
                  <li>38</li>
                  <li>39</li>
                  <li>40</li>
                  <li>41</li>
                  <li>42</li>
                  <li>43</li>
                  <li>44</li>
                  <li>45</li>
                  <li>46</li>
                  <li>47</li>
                  <li>48</li>
                  <li>49</li>
                  <li>50</li>
                  <li>51</li>
                  <li>52</li>
                  <li>53</li>
                  <li>54</li>
                  <li>55</li>
                  <li>56</li>
                  <li>57</li>
                  <li>58</li>
                  <li>59</li>
                  <li>00</li>
                  <li>01</li>
                  <li>02</li>
                  <li>03</li>
                  <li>04</li>
                  <li>05</li>
                  <li>06</li>
                  <li>07</li>
                  <li>08</li>
                  <li>09</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li>18</li>
                  <li>19</li>
                </ul>
              </div>
              <ul className="digits">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
              </ul>
              <div className="hours-hand"></div>
              <div className="minutes-hand"></div>
              <div className="seconds-hand"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}


export default Validator;