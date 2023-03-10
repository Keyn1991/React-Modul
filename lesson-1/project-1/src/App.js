
import './App.css';
import SimpsonComponet from "./Components/SimpsonsComponents/SimpsonComponet";
import RickSanchezComponent from "./Components/RickandMortyComponets/RickSanchezComponent";
import React from "react";



function App() {







  return (
    <div className="wrap">

        <SimpsonComponet
            itemName={'Bartholomew "Bart" JoJo/Jay Simpson'}
            pic={'https://static.wikia.nocookie.net/deathbattlefanon/images/f/f7/6355543_preview.png'}
            itemDescription={'(April 1, 1979) (planned name - Mort Simpson)- the mischievous and "especially dangerous" son of Homer and Marge Simpson, is the older brother of Lisa and Maggie. Bart is also known as "El Barto" and "Bartman". After discovering the comet in the episode "Bart\'s Comet", he was given the nickname Cosmo. An entire comic book series of the same name (formerly Simpsons Comics Presents Bart Simpson) is dedicated to Bart. Bart is modeled after a young Matt Groening and his brother Mark'}
        />
        <SimpsonComponet
            itemName={'Homer Jay Simpson, Sr'}
            pic={'https://static.wikia.nocookie.net/deathbattlefanon/images/5/52/Hemir_Sempsan.png'}
            itemDescription={'(Born May 10, 1950, judging by different series) - one of the main characters of the series. The head of the family is overweight, lazy, dumb, but with all the shortcomings, he is shown as a devoted and loving father and husband (especially in the first seasons).\n' +
                '\n' +
                'Homer works as a safety inspector at the Springfield Nuclear Power Plant, Sector 7G, although he is completely incompetent and mostly sleeps on duty and eats donuts. He spends a lot of time at Moe\'s Tavern with his friends Barney, Carl, Lenny, and Moe the bartender, and suffers from a fairly noticeable addiction to Duff beer. At home, he mostly watches TV, sitting or lying on his favorite couch, eating or drinking. '}
        />
        <SimpsonComponet
            itemName={'Marjorie Jacqueline "Marge" Simpson'}
            pic={'https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png'}
            itemDescription={'wife of Homer and mother of their three children: Bart, Lisa and Maggie. Born March 19, 1955. Marge often takes the opportunity to make remarks to her family, and can often be heard grumbling during any of the family\'s antics, trying to maintain order in the Simpsons\' house. In addition to her duties at home, Marge sometimes takes on other professions, making her own career. For example, she was a police officer to fight violence on the streets. Participates in some popular initiatives and is known in the city as a woman who speaks a weighty word in defense of benefactors and traditions.'}
        />

        <SimpsonComponet
            itemName={'Lisa Simpson'}
            pic={'https://static.wikia.nocookie.net/simpsons/images/0/06/Snow_Day_Lisa.png'}
            itemDescription={'May 9, 1981 - a charismatic eight-year-old girl with a very high level of intelligence, the middle child in the Simpson family, one of the main characters of the series. It is the spiritual center of the family. Lisa constantly lacks the parental attention of Homer and Marge, because of which she plunges into hobbies: playing the saxophone and guitar, riding and caring for horses, an interest in science, conservation and the constant struggle for someone\'s rights and own confession. At school, Lisa\'s popularity depends on the opinions of her peers, and they, considering her super successful, constantly underestimate her, so she has only a few friends. Lisa '}
        />
        <SimpsonComponet
            itemName={'Margaret ??Maggie?? Evelyn Simpson'}
            pic={'https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png'}
            itemDescription={'Like Bart, Maggie was an unplanned child. When Homer managed to accumulate enough money, he quit the nuclear power plant and began working in a bowling alley. His life was perfect - the children are growing, the work is enjoyable, and he finally did with Burns what he dreamed of. Wanting to celebrate, Marge and Homer make love. '}
        />


        <div className="Aside">

    <RickSanchezComponent id={1} name={'Rick Sanchez'} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} status={'Alive'} species={'Human'} gender={'Male'}/>
    <RickSanchezComponent id={2} name={'Morty Smith'} image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'} status={'Alive'} species={'Human'} gender={'Male'}/>
    <RickSanchezComponent id={3} name={'Summer Smith'} image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'} status={'Alive'} species={'Human'} gender={'Female'}/>
    <RickSanchezComponent id={4} name={'Beth Smith'} image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'} status={'Alive'} species={'Human'} gender={'Male'}/>
    <RickSanchezComponent id={5} name={'Jerry Smith'} image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'} status={'Alive'} species={'Human'} gender={'Male'}/>
    <RickSanchezComponent id={6} name={'Abadango Cluster Princess'} image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'} status={'Alive'} species={'Alien'} gender={'Female'}/>
        </div>


    </div>
  );

}


export default App;
