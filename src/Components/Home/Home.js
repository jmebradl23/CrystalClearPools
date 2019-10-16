import React from 'react';
import './Home.css';
import '../../main.css';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {InlineImg} from "../InlineImg/InlineImg";
import InlineImg from '../InlineImg/InlineImg';
import Footer from '../Footer/Footer';
// import Nav from '../Nav/Nav';
// import Faq from '../FAQ/Faq';
// import HomeImg1 from '../../img/homeImg1.jpg';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import longpool from '../../img/longpool.jpg';
// import Test from '../Test/Test';

class Home extends React.Component {
// function Home() {

    state = {
        iiTitle: "A Commitment to Customer Satisfaction",
        iiDescription: "Crystal Clear Pool & Spa Service is one of the few Napa pool maintenance and repair companies to offer complete swimming pool maintenance and repair services for extremely affordable prices. This means that no matter the size of your project or number of Napa pool maintenance or repair services you require, you can trust that every step of the process will be expertly handled by the same company. Our work is always guaranteed, and we make sure that you are kept up-to-date on our progress and on any and all aspect of the work that may bring changes to the schedule or work order. If you are a Napa pool owner and would like more information on the pool maintenance and repair services we offer, do not hesitate to call us today. We will be happy to schedule a free estimate at your earliest convenience.",
        iiTag: "Call us now! (707) 252-8255"

    }

    render () {
        return (
//   return (
    <div className="Home">
        <section className='sec1 sec-img'>
            <h1 className="txt-ctr txt-overlay">Pool Service, Spa Repairs and Pool Maintenance in Napa and surrounding areas</h1>
        </section>

        <section className="padding-container sec-content">
            <h1 className="txt-ctr sec-title">About Us</h1>
            <div className="triplet-flex">
                <div className="third third-cont right">
                    <FontAwesomeIcon icon={faBriefcase} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />
                    <hr/>
                    <p className="txt-ctr descript-title">Efficient</p>
                    <p className="txt-ctr">Crystal Clear Pool & Spa Service is the company of choice for pool owners in the greater Napa area who are looking for a professional, qualified and affordable pool maintenance team. Our years of training and experience not only make us knowledgeable, they also make us the very best company in Napa to handle most any pool maintenance and repair service quickly and efficiently.</p>
                </div>
                <div className="third third-cont right">
                    <FontAwesomeIcon icon={faSwimmer} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />
                    <hr/>
                    <p className="txt-ctr descript-title">Dedicated</p>
                    <p className="txt-ctr">We have been proudly offering pool maintenance and repair services to Napa residents for many years. Being pool enthusiasts ourselves, we understand the commitment as well as the investment you have made when you became a Napa pool owner. We know how much work needs to be put in and around your pool to keep it clean, safe and enjoyable, and we also understand that, unlike us, caring for your Napa pool shouldn't be your primary occupation. Why spend more time on pool maintenance than on actually enjoying your pool?</p>
                </div>
                <div className="third third-cont right">
                    <FontAwesomeIcon icon={faClock} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />
                    <hr/>
                    <p className="txt-ctr descript-title">Experienced</p>
                    <p className="txt-ctr">Crystal Clear Pool & Spa Service will be happy to take on part or all of your Napa pool maintenance, repair and renovation duties, allowing you more time to make the most of your investment in your free time. Crystal Clear Pool & Spa Service offers regular maintenance services, such as weekly Napa pool cleaning and chlorine monitoring as well as seasonal and unscheduled maintenance and repair services, such as pool painting and tile repair. Whatever your needs or your budget, we can help.</p>
                </div>
            </div>
        </section>

        <section className='sec2 sec-img'></section>

        <section className="padding-container sec-content longpool">
            < InlineImg title={'A Commitment to Customer Satisfaction'} description={'Crystal Clear Pool & Spa Service is one of the few Napa pool maintenance and repair companies to offer complete swimming pool maintenance and repair services for extremely affordable prices. This means that no matter the size of your project or number of Napa pool maintenance or repair services you require, you can trust that every step of the process will be expertly handled by the same company. Our work is always guaranteed, and we make sure that you are kept up-to-date on our progress and on any and all aspect of the work that may bring changes to the schedule or work order. If you are a Napa pool owner and would like more information on the pool maintenance and repair services we offer, do not hesitate to call us today. We will be happy to schedule a free estimate at your earliest convenience.'} tag={'Call us now! (707) 252-8255'} img={longpool} reverse={false} imgWidth={50} contWidth={50}/>
            {/* < InlineImg img={longpool} title={this.state.iiTitle} description={this.state.iiDescription} tag={this.state.iiTag} size={'tall'}/> */}
        </section>

        
        {/* <section id="about" className='sec2 content ptb-80'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nulla doloribus asperiores voluptates recusandae neque aut excepturi. Pariatur iure obcaecati accusantium temporibus quidem nostrum tempora, aperiam rerum laboriosam, repellendus molestias. Consequatur quae voluptatibus nam. Adipisci dignissimos quidem quam odio alias error ipsa corporis? Minus qui magnam praesentium id placeat cupiditate, eum cumque at tempora nostrum mollitia aspernatur illum! Necessitatibus blanditiis, porro nobis cupiditate pariatur impedit nemo nisi beatae maxime illum obcaecati debitis doloribus atque? Quis laudantium quisquam tempora ea cumque dicta earum fuga ipsum, tempore fugiat exercitationem optio architecto voluptates libero quam molestias et ullam molestiae! Quaerat ipsam perferendis expedita ipsum necessitatibus quod laborum neque ut modi! Quisquam, optio ipsam deleniti voluptas tenetur alias mollitia omnis iusto repellat quis impedit magnam fuga? Ad accusamus id ex architecto explicabo perspiciatis quaerat aliquam pariatur sed reiciendis, dolor veniam minima? Fugiat, cumque recusandae corrupti unde illum omnis aliquid, ipsam obcaecati praesentium inventore pariatur dicta sunt commodi ab, tempora perspiciatis fugit vitae sapiente animi beatae nobis aperiam asperiores. Deleniti fugiat praesentium ratione quibusdam eius quod soluta perferendis laborum dicta aspernatur officia adipisci ducimus nam, dignissimos sequi unde aut magnam facilis tenetur. Neque perspiciatis, ipsum beatae doloribus necessitatibus delectus possimus deserunt at dignissimos odio est ratione maxime dolor fugiat. Vel beatae delectus sapiente fugit nulla deleniti architecto reiciendis numquam sit ipsum distinctio optio ducimus at fugiat, recusandae rem quaerat. At quos placeat perferendis provident repellat, sed tempora minus, mollitia culpa ad ex officia ducimus repudiandae. Itaque sit unde, quam modi quae accusantium cupiditate cum, voluptate maiores recusandae explicabo nihil vero laboriosam? Quia reprehenderit eum praesentium porro? Mollitia, a. Libero quaerat saepe ut ex debitis ratione dolore, ipsa earum? Obcaecati quidem architecto accusantium nulla inventore praesentium, beatae tempora dicta nam! Adipisci reprehenderit deserunt vero itaque incidunt iusto, voluptates, aliquam magni officia voluptatum suscipit rerum sint.</p>
        </section>
        <section className='sec2 sec-img'></section>
        <section id="services" className='content ptb-80'>
            <h1>Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nulla doloribus asperiores voluptates recusandae neque aut excepturi. Pariatur iure obcaecati accusantium temporibus quidem nostrum tempora, aperiam rerum laboriosam, repellendus molestias. Consequatur quae voluptatibus nam. Adipisci dignissimos quidem quam odio alias error ipsa corporis? Minus qui magnam praesentium id placeat cupiditate, eum cumque at tempora nostrum mollitia aspernatur illum! Necessitatibus blanditiis, porro nobis cupiditate pariatur impedit nemo nisi beatae maxime illum obcaecati debitis doloribus atque? Quis laudantium quisquam tempora ea cumque dicta earum fuga ipsum, tempore fugiat exercitationem optio architecto voluptates libero quam molestias et ullam molestiae! Quaerat ipsam perferendis expedita ipsum necessitatibus quod laborum neque ut modi! Quisquam, optio ipsam deleniti voluptas tenetur alias mollitia omnis iusto repellat quis impedit magnam fuga? Ad accusamus id ex architecto explicabo perspiciatis quaerat aliquam pariatur sed reiciendis, dolor veniam minima? Fugiat, cumque recusandae corrupti unde illum omnis aliquid, ipsam obcaecati praesentium inventore pariatur dicta sunt commodi ab, tempora perspiciatis fugit vitae sapiente animi beatae nobis aperiam asperiores. Deleniti fugiat praesentium ratione quibusdam eius quod soluta perferendis laborum dicta aspernatur officia adipisci ducimus nam, dignissimos sequi unde aut magnam facilis tenetur. Neque perspiciatis, ipsum beatae doloribus necessitatibus delectus possimus deserunt at dignissimos odio est ratione maxime dolor fugiat. Vel beatae delectus sapiente fugit nulla deleniti architecto reiciendis numquam sit ipsum distinctio optio ducimus at fugiat, recusandae rem quaerat. At quos placeat perferendis provident repellat, sed tempora minus, mollitia culpa ad ex officia ducimus repudiandae. Itaque sit unde, quam modi quae accusantium cupiditate cum, voluptate maiores recusandae explicabo nihil vero laboriosam? Quia reprehenderit eum praesentium porro? Mollitia, a. Libero quaerat saepe ut ex debitis ratione dolore, ipsa earum? Obcaecati quidem architecto accusantium nulla inventore praesentium, beatae tempora dicta nam! Adipisci reprehenderit deserunt vero itaque incidunt iusto, voluptates, aliquam magni officia voluptatum suscipit rerum sint.</p>
        </section>
        <section className='sec3 sec-img'></section>
        <section id="contact" className='content ptb-80'>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid nulla doloribus asperiores voluptates recusandae neque aut excepturi. Pariatur iure obcaecati accusantium temporibus quidem nostrum tempora, aperiam rerum laboriosam, repellendus molestias. Consequatur quae voluptatibus nam. Adipisci dignissimos quidem quam odio alias error ipsa corporis? Minus qui magnam praesentium id placeat cupiditate, eum cumque at tempora nostrum mollitia aspernatur illum! Necessitatibus blanditiis, porro nobis cupiditate pariatur impedit nemo nisi beatae maxime illum obcaecati debitis doloribus atque? Quis laudantium quisquam tempora ea cumque dicta earum fuga ipsum, tempore fugiat exercitationem optio architecto voluptates libero quam molestias et ullam molestiae! Quaerat ipsam perferendis expedita ipsum necessitatibus quod laborum neque ut modi! Quisquam, optio ipsam deleniti voluptas tenetur alias mollitia omnis iusto repellat quis impedit magnam fuga? Ad accusamus id ex architecto explicabo perspiciatis quaerat aliquam pariatur sed reiciendis, dolor veniam minima? Fugiat, cumque recusandae corrupti unde illum omnis aliquid, ipsam obcaecati praesentium inventore pariatur dicta sunt commodi ab, tempora perspiciatis fugit vitae sapiente animi beatae nobis aperiam asperiores. Deleniti fugiat praesentium ratione quibusdam eius quod soluta perferendis laborum dicta aspernatur officia adipisci ducimus nam, dignissimos sequi unde aut magnam facilis tenetur. Neque perspiciatis, ipsum beatae doloribus necessitatibus delectus possimus deserunt at dignissimos odio est ratione maxime dolor fugiat. Vel beatae delectus sapiente fugit nulla deleniti architecto reiciendis numquam sit ipsum distinctio optio ducimus at fugiat, recusandae rem quaerat. At quos placeat perferendis provident repellat, sed tempora minus, mollitia culpa ad ex officia ducimus repudiandae. Itaque sit unde, quam modi quae accusantium cupiditate cum, voluptate maiores recusandae explicabo nihil vero laboriosam? Quia reprehenderit eum praesentium porro? Mollitia, a. Libero quaerat saepe ut ex debitis ratione dolore, ipsa earum? Obcaecati quidem architecto accusantium nulla inventore praesentium, beatae tempora dicta nam! Adipisci reprehenderit deserunt vero itaque incidunt iusto, voluptates, aliquam magni officia voluptatum suscipit rerum sint.</p>
        </section>
        <section  id="mtnImg" className='sec4'></section> */}
    </div>
  )
    }
}

export default Home;