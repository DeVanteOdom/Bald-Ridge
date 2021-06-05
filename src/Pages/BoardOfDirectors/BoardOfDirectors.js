import React, {Component} from 'react';
import "./BoardOfDirectors.css"
import BoardofDirectorsObj from "../../Components/boardofdirectorsobj";

import backgroundImg from "../../assets/backgrounds/conference-room-2.jpg"
import adamrodes from "../../assets/boardofdirectors/adamrodes.webp"
import adipatel from "../../assets/boardofdirectors/adipatel.jpg"
import amybrowning from "../../assets/boardofdirectors/amybrowning.webp";
import cherylkearny from "../../assets/boardofdirectors/cherylkearny.webp";
import chrisshelton from "../../assets/boardofdirectors/chrisshelton.webp";
import dennisbuckley from "../../assets/boardofdirectors/dennisbuckley.webp";
import elizabethhoward from "../../assets/boardofdirectors/elizabethhoward.PNG";
import ginabrenk from "../../assets/boardofdirectors/ginabrenk.webp";
import greggoshcy from "../../assets/boardofdirectors/greggoschy.webp";
import jamesdunn from "../../assets/boardofdirectors/jamesdunn.webp";
import jayneiglesias from "../../assets/boardofdirectors/jayneiglesias.webp";
import jeffsmith from "../../assets/boardofdirectors/jeffsmith.webp";
import jennifergarner from "../../assets/boardofdirectors/jennifergarner.PNG";
import jerrybowman from "../../assets/boardofdirectors/jerrybowman.PNG";
import johnbramlett from "../../assets/boardofdirectors/johnbramlett.webp";
import julieclark from "../../assets/boardofdirectors/juliaclark.jpg";
import kaceymuffin from "../../assets/boardofdirectors/kaceymuffin.webp";
import kellytam from "../../assets/boardofdirectors/kellytam.webp";
import krisannnansen from "../../assets/boardofdirectors/krisannnansen.webp";
import loganbutler from "../../assets/boardofdirectors/loganbutler.jpg";
import majorjoeperkins from "../../assets/boardofdirectors/majorjoeperkins.webp";
import michelledaniels from "../../assets/boardofdirectors/michelledaniels.webp";
import milanpatel from "../../assets/boardofdirectors/milanpatel.webp";
import randyodell from "../../assets/boardofdirectors/randyodell.webp";
import stevenwhite from "../../assets/boardofdirectors/stevenwhite.webp";
import tracymoonjr from "../../assets/boardofdirectors/tracymoonjr.webp";
import virgiliopascoe from "../../assets/boardofdirectors/virgiliopascoe.jpg";
import { ParallaxBanner } from 'react-scroll-parallax';

class BoardOfDirectors extends Component {
    constructor() {
        super();
        this.state = {
            header: "Board of Directors",
            description: "The Bald Ridge Lodge Board of Directors is a group of dedicated individuals who volunteer their time, talent, and resources to support the mission of Bald Ridge Lodge. They sets the overall direction and goals of the Lodge, provide advice and direction on key projects and initiatives, and support the financial stability and strength of the organization.",
            header2: "Advisory Board",
            DATA: [{
                profilePic: adipatel,
                name: "Adi Patel",
                answers: ["Power (electricity) & around the house tools.",
                    "I truly believe that our youth hold the key to the future. If I can help in a small way to unlock their potential it will be a very rewarding experience. It is our responsibility to equip them with proper tools to help them get to their full potential. One of the effective ways I can help is by mentoring and sharing my personal experiences.",
                    "As a board member, I would love to build strong relationships and business and leadership skills; ultimately furthering organization's mission."]
            }, {
                profilePic: loganbutler,
                name: "Logan Butler",
                answers: ["I am a partner in the law firm Patterson Moore Butler and I specialize in criminal defense, general civil litigation, and probate matters.",
                    "I have worked with juveniles who have resided at the lodge or been sent to the lodge and know firsthand that the lodge makes a difference.  I really enjoy helping the lodge administratively so it can better provide its services to the boys.",
                    "The Lodge requires a lot of work and effort, undertaken by numerous staff and volunteers, in order to provide the best service in the state to the boys it serves.  It is truly amazing to see how the boys' care is prioritized over everything else and how everyone then comes together to make the Lodge such a great service provider for our community."]
            },{
                profilePic: jerrybowman,
                name: "Jerry Bowman",
                answers: ["Chief Operating Officer for large transportation and logistics company.  Love being a part of people growing and progressing.",
                    "Making a difference in the lives of these young men who we have a chance to influence",
                    "What we can do to get even better at providing support to the boys who pass through our doors."]},{
                profilePic: julieclark,
                name: "Julie Willharm Clark",
                answers: ["Project management!  This is what I love to do and working with the board, the staff and the boys makes it all worth it",
                    "Observing boys growing into men in a clean and safe environment as well as working with the BRL team members and community partners on creating memorable life skills and experiences for these young men.",
                    "It takes a village. People, hospitals, and companies from all across Georgia and the Southeast donate, care and pray for the well-being of this special group of folks. I am very blessed to be in their company and I hope I can help continue making a difference."]},{
                profilePic: virgiliopascoe,
                name: "Virgilio Perez Pascoe",
                answers: ["International chief operating officer for consumer goods companies in food and beverage industries served on Board of Directors of National Venezuelan consumer goods company MAVESA, and currently, serves on 10 Non-Profit Boards working diligently to improve our Georgia communities.",
                "The Bald Ridge Lodge affords me the opportunity to understand the challenges, opportunities, and resources required to provide positive outcomes for the county’s youth who may need special guidance beyond that of the mentoring experience.",
                "I have only been on the Board since the beginning of the year.  What strikes me most is how important it is to coordinate with other government agencies, the parents or caregivers of youth, as well, as motivating volunteers to follow the best practices which the experts suggest."]},{
                profilePic: elizabethhoward,
                name: "Elizabeth Howard",
                answers: ["Healthcare",
                    "It is very fulfilling being a part of an amazing organization who positively impacts lives in my community.  I feel lucky to be a part of such a life-changing organization.",
                    "The biggest lesson I have learned during my time on the board is that service can change your community.  I look forward to learning and growing as a person through service."]},{
                profilePic: jennifergarner,
                name: "Jennifer Garner",
                answers: ["Education.  I have been an educator in the Forsyth County School System for 25 years, all of that time in the Forsyth Central cluster schools of Otwell Middle and Forsyth Central High School.  ",
                    "Working with and for kids",
                    "As a new board member, I hope to impact the lives of the young men in our community.  I am\n" +
                    "looking forward to working with a group of people dedicated to providing the best care and\n" +
                    "support for the residents of the Lodge."]}, {
                profilePic: stevenwhite,
                name: "Steven White",
                answers: ["The ability to network and fundraiser.",
                    "Favorite part about being involved with the Lodge, I believe it is seeing the difference the Lodge makes in the lives of the boys we support.",
                    "The biggest lesson, being new to the Board I would have to say that every meeting I learn something new. So the lesson would be that it \"takes a village\" and that as a group of \"1's\" we can make a difference."]},{
                profilePic: adamrodes,
                name: "Adam Rodes",
                answers: ["Branch Manager at the Wells Fargo Home Mortgage Branch in downtown Cumming.  A 10-year resident of Forsyth County opened the branch in June of 2013.  A top producer in mortgage at Wells Fargo, Adam is a member of Leaders Club, closing loans for over 1000 families in in recent years.  He has worked at Wells Fargo for the past 10 years and has consistently ranked in the top 10 loan officers in the Southeast for units and volume. He has over 15 years in the mortgage business",
                    "Adam is a board member as well as a mentor to the young men at the lodge, taking the boys on outings and helping to mentor them is a highlight and a privilege.",
                    ""]},{
                profilePic: amybrowning,
                name: "Amy Browning",
                answers: ["My professional expertise is in healthcare administration building high-quality clinical programs in the acute care setting.  For the past 10 years, I have had the wonderful opportunity to focus on the Cardiovascular Service Line at Northside Hospital Forsyth.",
                    "While in the Leadership Forsyth Program, I was exposed to the great work that is going on at the Bald Ridge Lodge.  It was eye-opening to see the need and how it is currently being met in our community.  It is my hope that I might be able to leverage whatever skills I may have to serve in a way that benefits the Bald Ridge Lodge.",
                    "This will be my first experience serving on a Board of Directors.  I am excited to learn the process and to be part of a great team that is improving lives in our community."]},{
                profilePic: michelledaniels,
                name: "Michelle Daniels",
                answers: ["Director of Tourism Development, Event Planning, Digital Media Marketing",
                    "Seeing the difference the lodge makes in their lives is an honor and privilege. ",
                    "The biggest lesson I’d love to learn is gratitude and seeing the world through their eyes and experiences. The best way to make a difference is to join them on the journey and collectively find ways to improve their lives – one step at a time."]},{
                profilePic: randyodell,
                name: "Randy O'Dell",
                answers: ["Caring and the ability to listen.  The difference between hearing and listening can mean the difference for a child knowing that you care.",
                    "Knowing that I can bring the boys and the Board my willingness to be open to caring and giving to those who need someone to care about them.  Life without hope is a lonely walk. ",
                    "How to be a strong influence in the community and keeping dignity and respect in place."]},{
                profilePic: kellytam,
                name: "Kelly Tam",
                answers: ["Influencing and encouraging young people.\n" +
                "As a local restaurant owner, I often have the opportunity to give a young person their first job.  I am also employed with Forsyth County Schools and I feel that giving time and attention to students is a calling.",
                    "Working with others who recognize the opportunity to influence our youth, even in the smallest of ways.  Bald Ridge Lodge was founded with the best of intentions and our board is comprised of the most caring and giving professionals in the community.",
                    "I am new to the Board but it's been my experience that we all have had a past exposure, either personally or through a family member or friend, where someone has \"lost their way.\"  I place high value on the simplicity and authenticity of support and encouragement to others."]},{
                profilePic: ginabrenk,
                name: "Gina Brenk",
                answers: ["Billing, leading a team ",
                    "I am excited to be part of an organization that is making a difference in boys’ lives.  ",
                    "I want to learn how I can make a difference and impact so the boys can grow and become awesome adults.  "]},{
                profilePic: chrisshelton,
                name: "Chris Shelton",
                answers: ["Custom Home Renovations, Law Enforcement, Building Relationships",
                    "Building relationships, encouraging others to be their best no matter what life challenges they’re facing. Building character, installing values, guiding others in positive direction for successful futures. With the right village of people we can bring out the very best in our youth.  ",
                    "All things are possible giving the right set of values, life lessons, and people in your life. Together we can bring out the absolute best in everyone. I learn as much from the young people as I hope they learn from my past experiences."]},{
                profilePic: majorjoeperkins,
                name: "Major Joe Perkins",
                answers: ["Years of leadership in law enforcement",
                    "Being a part of an organization that makes a difference in the lives of the boys who need mentors and role models.",
                    "To grow as a person and a mentor to young adults, our future."]},{
                profilePic: krisannnansen,
                name: "Kris-Ann Nansen",
                answers: ["I am a mom to two young men. I am a Project Manager by trade.  I enjoy working with diverse groups of people to solve problems or create new products. I also take great pride in throwing parties for special people! ",
                    "As a member of other organizations, I have seen the incredible work being done at Bald Ridge Lodge.  I hope to leverage my personal and professional skills to make an impact at the Lodge, for the boys, and our community. ",
                    "This is my first year on the board, so I am learning new things everyday.  The biggest universal lesson though, is we all have something to give and we never know how that gift will impact another."]},{
                profilePic: johnbramlett,
                name: "John Bramlett",
                answers: ["I have been a banker in the area for 34 years.",
                    "I enjoy seeing the positive impact the Lodge has on the residents. ",
                    "I have seen the incredible impact the staff can have on the residents. Their positive impact can be life-changing!"]},{
                profilePic: dennisbuckley,
                name: "Dennis \"Buck\" Buckly",
                answers: ["Connecting people.  Professionally I provide Payroll and HR services.",
                    "The opportunity to make a difference in someone’s life",
                    "Brand new however, listening to the Boy’s speak at our social was eye opening.  They all have an amazing awareness and appreciation of what the Lodge has given them."]},{
                profilePic: kaceymuffin,
                name: "Kacey Martin",
                answers: ["I am an Assistant Principal at Forsyth Central High School. I have been in Education for 20 years. ",
                    "I get to work with some amazing and inspirational people on the Board that all want to do everything possible to help the boys at the Lodge.  ",
                    "I am brand new to the Board, but it is so awesome to see how this team works together to address the needs of the boys.  I am very excited to keep learning about Bald Ridge Lodge and to be an active part of this outstanding organization!"]},{
                profilePic: jamesdunn,
                name: "James Dunn",
                answers: ["I am an assistant district attorney in Forsyth County, an outdoorsman and I love to play guitar.",
                    "As a prosecutor, I have seen what the ravages of addiction and crime does to families. I love being a part of Bald Ridge Lodge because I want to be able to help young boys learn the tools, skills and coping mechanisms that they need to become productive and successful adults.",
                    "I’ve learned that everyone has something unique that they can to bring to the table to help others who are in desperate need, and I am always encouraged to see the breadth of people who all come together to help others."]},{
                profilePic: milanpatel,
                name: "Milan Patel",
                answers: ["Operations management and financial analysis.",
                    "Seeing the smiles on the boys faces as we work to change their lives, one boy at a time.",
                    "That it takes a community to make a difference in the lives of these boys."]},{
                profilePic: greggoshcy,
                name: "Greg Goschy",
                answers: ["Professionally, my area of expertise is research and development in the area of high performance plastics. Personally, I really enjoy gardening and building things, although I'm not sure if I would qualify as an expert...",
                    "My favorite part so far has been seeing the boys accomplish goals like earning a GED or learning to play the guitar. I've also really enjoyed just interacting with the boys, staff and board members.",
                    "During my short time as a board member, I've learned how well the Lodge is managed. Specifically, it's been awesome to see such a high level of teamwork between staff and board members to serve the boys."]},
        ],
            DATAB: [{
                profilePic: jeffsmith,
                name: "Jeff Smith",
                answers: [
                    "Information Technology Professional.",
                    "I am amazed at the stories of the how the boys' lives have been turned around by the work of the sensational staff.  These boys are given hope for a brighter future.",
                    "I have learned that through a nurturing yet structured environment, a young boy's life can be transformed into something amazing."]}, {
                profilePic: cherylkearny,
                name: "Cheryl Kearnly",
                answers: [
                    "My expertise is project management and streamlining processes for efficiency and effectiveness.",
                    "It is a pleasure to work with dedicated individuals who have a true desire to change the lives of the young men that we serve.  Because I strongly believe in the concept of “community”, I feel that if a positive change is made in one person then that will spread to others.  It happens over and over for the individuals at the Bald Ridge Lodge.",
                    "The biggest lesson I have learned from my experience as a Board Member is that when like-minded people come together to make something happen the result will be incredible!  The Bald Ridge Lodge is a wonder example of what can happen when a need is addressed by the right group of people with the tenacity and dedication to make a dream a reality."
                    ]},{
                profilePic: jayneiglesias,
                name: "Jayne Iglesias",
                answers: [
                    "I am an architectural designer. I work with architects and builders to design spaces.",
                    "What I love the most about the Bald Ridge Boys Lodge is the feeling you get as soon as you walk through the door. Everyone involved with the BRBL is positive and the living environment is positive and the feeling from the boys is positive. The boys we serve may not come from positive situations but they can make a positive impact on our community and they learn that during their stay at the Lodge.",
                    "As a member of the board I hope to learn how our agency works with local resources to help our residents and how I can help make that process more efficient."
                    ]},{
                profilePic: tracymoonjr,
                name: "Tracy Moon Jr.",
                answers: ["Partner, Law Firm of Fisher Phillips, representing employers in employment and labor matters.",
                    "Helping residents become good citizens.",
                    "All assistance, no matter how small, can help the Lodge's residents become good citizens."
                ]}

            ],
            questions: ["Expertise?",
                "What is your favorite part about being involved at the Bald Ridge Lodge?",
                "What is the biggest lesson you have learned throughout your time as a Board Member?"]
        }
    }
    render() {
        return <div className="board-of-directors">
            <ParallaxBanner 
                className="bod-header"
                style={{objectFit: "cover", minHeight: "30vh"}}
                layers={[{image: backgroundImg, amount: 0.4}]}>
                    <h1>{this.state.header}</h1>
                    <p>{this.state.description}</p>
            </ParallaxBanner>

            <div>
                {this.state.DATA.map((obj, i) =>
                    <BoardofDirectorsObj key={'b-o-d'+i} name={obj.name} src={obj.profilePic} answers={obj.answers} questions={this.state.questions}/>)}
            </div>
            <h1>{this.state.header2}</h1>
            <div>
                {this.state.DATAB.map((obj, i) =>
                    <BoardofDirectorsObj key={'b-o-d2'+i} name={obj.name} src={obj.profilePic} answers={obj.answers} questions={this.state.questions}/>)}
            </div>
        </div>
    }
}
export default BoardOfDirectors;