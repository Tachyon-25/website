import React from "react";
import "./cardAbout.css"

const cardAbout = () => {
    return (
        <>
            <section className="CardPage">
                <div className="HeroInfo">
                    <div className="AboutHero">
                        <span className="HeroSkilltxt">Skilled Hand-To-Hand</span>
                        <span className="HeroName">Nezuko Kamado</span>
                        <span className="HeroAbout">Nezuko Kamado is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and turned into a demon by Muzan Kibutsuji.</span>
                        
                        <span className="Abilitiestxt">Abilities</span>
                        <div className="border"></div>
                        <ul className="ulAbilites">
                            <li><img className="abilities-background" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/62157e7159df8360db310be5_Regeneration.svg" alt=""></img>Ability1</li>
                            <li><img className="abilities-background" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/62157e8579a5732e7f2b2b70_strength.svg" alt=""></img>Ability2</li>
                            <li><img className="abilities-background" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/62157eada31431926cee6417_size.svg" alt=""></img>Ability3</li>
                            <li><img className="abilities-background" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/62157eb2051086343d5ce938_blood.svg" alt=""></img>Ability4</li>
                            <li><a href="https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado#Abilities"><img style={{border:"4px solid white", "border-radius" : "500px", padding : "0px", "margin-right" : "20px","margin-left" : "40px", width : "60px", height : "60px"}} src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/6215779be20f8ca838d9d591_more.svg" alt=""></img>View More</a></li>
                        </ul>
                    </div>
                    <div className="animepic">
                        <div className="wrapper-div">
                            
                            <img id="animepic" src="/nezuko.png" alt="heroimage"></img>
                            <img id="background-animepic" src="https://cdn.prod.website-files.com/62091a8c8bac4e5727559c42/621bd39c1a15cc9a7755f9cc_Isologo.svg" alt="backgorund"></img>
                        
                        </div>
                    </div>
                </div>
            </section>
            <section className="Gallery">
                <span className="Gallerytxt">Best Moments</span>
                <div className="border-gallery"></div>
                <div className="ImageCard">
                    <div className="ImageCard-Wrapper">
                        <img id="ImageCard1" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621c0e59a39925ebb7904ff3_Nezuko%20vs%20Daki.jpeg" alt="EP1"/>
                        <div class="circle-div"><img src="https://cdn.prod.website-files.com/62091a8c8bac4e5727559c42/621a71d136dd895332b9e3c7_Play%20Button.svg" alt=""></img></div>
                        <span className="ImageCard1-span">Nezuko vs DAKI</span>
                        <span className="ImageCard1-span" style={{ fontSize: '15px' , fontWeight : "50"}}><br/>Season 1</span>
                        
                    </div>
                    <div className="ImageCard-Wrapper">
                        
                        <img id="ImageCard2" src="https://cdn.prod.website-files.com/6215709a2879ceb5988bb02e/621c0e3be9dd712a496b1d53_Nezuko%20vs%20Rui.jpeg" alt="EP1"/>
                        <div class="circle-div"><img src="https://cdn.prod.website-files.com/62091a8c8bac4e5727559c42/621a71d136dd895332b9e3c7_Play%20Button.svg" alt=""></img></div>
                        <span className="ImageCard1-span">Nezuko vs RUI</span>
                        <span className="ImageCard1-span" style={{ fontSize: '15px', fontWeight : "50" }}><br/>Season 2</span>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default cardAbout;