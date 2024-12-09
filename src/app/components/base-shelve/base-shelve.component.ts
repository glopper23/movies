import { Component, Input } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
    selector: 'base-shelve',
    templateUrl: './base-shelve.component.html',
    styleUrls: ['./base-shelve.component.scss'],
  })
  export class BaseShelveComponent {
    shelvesType: string = 'music';
    selectedIndex: number = 0;
    movieServiceSub?: Subscription;
    shelvesLevels: ShelfItem[]= [
      {
        cover: 'cinderella.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: 'A cinderella Story',
        case: 'cinderella.png',
        scene: "cinderella.jpeg",
        description: "Probably one of the first not animated movies I loved. I remember watching it at the weekends when I was in elementary school. I felt a renovated connection to this movie after giving it a second try when I was seventeen. We always look for people or stories we can relate to, and this was one of them at the time.",
        trailer: "https://www.youtube.com/embed/B_VFs9j95gc?si=R0Dvy1R1vQg38dXK"
      },
      {
        cover: 'casper.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Casper",
        case: 'casper.png',
        scene: "casper.png",
        description: "Loved the dad and daughter interaction. I don't know why but this movie always reminds me of how it feels to be happy. It also feels very 90's, exactly how life felt when I was like 4 years old, everything was still very 90's until I was like 5 or 6 years old.",
        trailer: "https://www.youtube.com/embed/1RM2TV4vDUY?si=yrH89duEDNjGq1b9"
      },
      {
        cover: 'three-kings.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: 'Three Kings',
        case: 'three-kings.png',
        scene: "three-kings.png",
        description: "Also probably one of the first not animated movies I saw and made me feel invested in the action and the storyline. I remember watching this with my parents as a kid. I just loved the story, and that it wasn't too dramatic, it was fun and adventurous. I still love it. Whoever chose 'The Beach Boys' and 'Chicago' for the soundtrack, thanks for your service.",
        trailer: "https://www.youtube.com/embed/XF_1WKz2_R4?si=NDWCD7OqFrGr8aPG"
      },
      {
        cover: 'home-alone.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Home Alone",
        case: 'home-alone.png',
        scene: "home-alone.png",
        description: "This movie always reminds me of my childhood, like, I used to spend most of my day by myself, I was a very lonely kid, by choice. And all those scenes in the movie where Kevin was home alone felt very familiar, even now that I'm an adult (Not home alone anymore haha).",
        trailer: "https://www.youtube.com/embed/jEDaVHmw7r4?si=gKmrBZ31387Hvt4S"
      },
      {
        cover: 'mask.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Mask",
        case: 'mask.png',
        scene: "mask.png",
        description: "A fun movie. I loved the mask, the way it was a very cartoonish character in a 'serious' movie, and somehow it worked so well, I think the only movie that comes close to this is Deadpool.",
        trailer: "https://www.youtube.com/embed/LZl69yk5lEY?si=t5graJogueEquEyh"
      },
      {
        cover: 'mummy.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Mummy",
        case: 'mummy.png',
        scene: "mummy.png",
        description: "Loved this movie. My favorite action saga from the 2000's. We had Brendan Fraser and Rachel Weisz in the same movie, and it was glorious.",
        trailer: "https://www.youtube.com/embed/f7oKxlaUBac?si=viHpEI2XaLrcw8Fg"
      },
      {
        cover: 'bean.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Mr. Bean's Holiday",
        case: 'bean.png',
        scene: "bean.png",
        description: "Very good memories from childhood. After watching it as an adult I found out the non-translated version was funnier because of the language barrier haha (Russian, French and English). The best part is that now I understand parts in every language.",
        trailer: "https://www.youtube.com/embed/hSxLUd8aly4?si=ELtyaeUMYXINk5Ab"
      },
      {
        cover: '13-on-30.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "13 going on 30",
        case: '13-on-30.png',
        scene: "13-on-30.png",
        description: "This movie talks a lot about every women's insecurities. Something I feet was very important to understand being that young. Also, it was entertaining.",
        trailer: "https://www.youtube.com/embed/_pmFp2W65Fs?si=yfsB-sDB7RSnEn9F"
      },
      {
        cover: 'miss.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Miss Congeniality",
        case: 'miss.png',
        scene: "miss.png",
        description: "If this movie was released today, some people would think it's woke as fuck. I miss those times where poeple just did movies. I loved this not becasue the protagonist was a tough woman, but because it was a great movie, very funny, and yes I loved imagining I could do imposible (or very difficult in reality) stuff too (I was like seven).",
        trailer: "https://www.youtube.com/embed/LwrEnPYHsyQ?si=8B3uMHjz0yUNengA"
      },
      {
        cover: 'harry-3.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Harry Potter and the Prisoner of Azkaban",
        case: 'harry-3.png',
        scene: "harry-3.png",
        description: "My favorite movie from the Harry Potter saga. It has everything I'd expect my magic school would have. The evil characters looked more realistic. I don't know, everything felt better designed and told in this movie. It made me want to be in the Harry Potter universe again.",
        trailer: "https://www.youtube.com/embed/lAxgztbYDbs?si=vZbSRZrhzJSfgNSm"
      },
      {
        cover: 'sky-high.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Sky High",
        case: 'sky-high.png',
        scene: "sky-high.png",
        description: "I was having my first big deception in life. This movie was just a distraction and made me clinge even more to my delusional desires :v. Still a very entertaining movie. Love the hero and assistant concept.",
        trailer: "https://www.youtube.com/embed/G7aMWVN1ThM?si=9p_j9-X93eHM41TC"
      },
      {
        cover: 'freaky-friday.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Freaky Friday",
        case: 'freaky-friday.png',
        scene: "freaky-friday.png",
        description: "I've watched this movie so many times and I loved it since the first time. The acting is great, the story is great and the music is amazing. Forever one of my favorites family comedies.",
        trailer: "https://www.youtube.com/embed/6XwjZ-LKQGQ?si=8kJXOGZqQjntv6i3"
      },
      {
        cover: 'parent-trap.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Parent Trap",
        case: 'parent-trap.png',
        scene: "parent-trap.png",
        description: "I was twelve when I watched this movie for the first time. Lindsay's acting here was on point, an epic performance for a twelve year old. At that age I loved everything Lindsay was on.",
        trailer: "https://www.youtube.com/embed/PMAhVpgzmRU?si=IX9_AUy-NvpX0OzV"
      },
      {
        cover: 'herbie.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Herbie: Fully loaded",
        case: 'herbie.png',
        scene: "herbie.png",
        description: "Just a badass movie, at least that was the impression I got back when I was twelve haha. Loved the message, and I was obsessed with this movie for several months. ",
        trailer: "https://www.youtube.com/embed/uRDpng9B1XQ?si=7Lfp5w5fEq8CbtCc"
      },
      {
        cover: 'starstruck.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Starstruck",
        case: 'starstruck.png',
        scene: "starstruck.png",
        description: "This was the typical fantasy of every teenage girl. Well done movie, great music. Just a movie to have a good time. As entertaining as a Wattpad Fanfic written by a 12 year old haha, and that's not an insult.",
        trailer: "https://www.youtube.com/embed/PmqQyrycpmE?si=4nXVz4peseSQrCnP"
      },
      {
        cover: 'princess-diaries.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Princess Diaries",
        case: 'princess-diaries.png',
        scene: "princess-diaries.png",
        description: "This is the typical movie about a nobody discovering they are special and changing their status. Loved it. This was the first Anne Hathaway movie I watched.",
        trailer: "https://www.youtube.com/embed/CzcGwB7qat8?si=q2uSm7eWkGYoa55g"
      },
      {
        cover: 'zathura.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Zathura: A space adventure",
        case: 'zathura.png',
        scene: "zathura.png",
        description: "Until now I feel this movie is one of the most creative I've seen. It also brings cool memories from the end of my childhood.",
        trailer: "https://www.youtube.com/embed/zNxm_obDpNU?si=rLFKBTQRxqxc5yui"
      },
      {
        cover: 'terabithia.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Bridge to Terabithia",
        case: 'terabithia.png',
        scene: "terabithia.png",
        description: "This movie was the first thing ever that broke my heart. I can't explain the grieve I felt later, I spent almost two weeks feeling sad about this movie. I really felt Jesse's lost.",
        trailer: "https://www.youtube.com/embed/_DSGAeeDXO0?si=kk59arjUwBrpWiXi"
      },
      {
        cover: 'mean-girls.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Mean Girls",
        case: 'mean-girls.png',
        scene: "mean-girls.png",
        description: "This was an eye opening movie to me at the time. I was just going into puberty when I watched this and it was like a slap in the face, kinda, like waking up to a new kind of culture, that was teen pop culture.",
        trailer: "https://www.youtube.com/embed/EMzEmGfTuM4?si=cTaQLMuXpiri15R8"
      },
      
      {
        cover: 'alice.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Alice in Wonderland",
        case: 'alice.png',
        scene: "alice.png",
        description: "Loved the misterious and dark vibes this movie has. Loved the choice of colors and character design. It really made me feel the movie. Great adaptation. It was so good, we (I don't remember who exactly, if it was me I don't know) used it as inspo for our costume contest at school. We won. The next year other class copied us for that reason.",
        trailer: "https://www.youtube.com/embed/P_IVeP3i7B0?si=nC7NpLp2jfeeSO59"
      },
      {
        cover: 'about-a-boy.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "About a Boy",
        case: 'about-a-boy.png',
        scene: "about-a-boy.png",
        description: "I could relate to the kid and the man at the same time. Somehow very warm and straight forward movie. Cozy and familiar feeling that I appreciated a lot when I was a pre-teen.",
        trailer: "https://www.youtube.com/embed/-apwoGTpi7E?si=EQoxHsoOFHHNIN6p"
      },
      {
        cover: '16-wishes.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "16 Wishes",
        case: '16-wishes.png',
        scene: "16-wishes.png",
        description: "I liked it just because it was a very common and fun fantasy to imagine all your wishes come true out of the blue, without making any real effort. Later in life when I watched it again, it kinda clicked the real message behind it, a fun and great movie.",
        trailer: "https://www.youtube.com/embed/N4ojtW0nPno?si=KKsFHRiH0U3TbsEW"
      },
      {
        cover: 'easy-a.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Easy A",
        case: 'easy-a.png',
        scene: "easy-a.png",
        description: "This movie was very liberating when I first saw it as a teen. Since I had memory I feel like I've always tried to do the right things, and this kind of movies are like a break for me, so I don't ruin my real life, something I'm very careful of, of course. If I had infinite lives, sure I'd do every single thing there is to do in this world.",
        trailer: "https://www.youtube.com/embed/KNbPnqyvItk?si=fy7J-Y3rtthPyMC1"
      },
      {
        cover: 'leon.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Leon: The Professional",
        case: 'leon.png',
        scene: "leon.png",
        description: "This movie left a strong first impression in my twelve year old brain. Natalie Portman did a great job. I felt very close to the little girl, those were the first times I felt the tragic life of a character as a real life thing. Now that I grew up, I can see certain things that stand in a fine line between disturbing stuff, very interesting how when I saw everything from Mathilda's perspective, I saw nothing slightly wrong or weird. Still a great movie.",
        trailer: "https://www.youtube.com/embed/aNQqoExfQsg?si=HT--SNUZNcw6d1iX"
      },
      
      {
        cover: '17-again.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "17 Again",
        case: '17-again.png',
        scene: "17-again.png",
        description: "I just teletransport to my 14 year old each time I watch this movie. It makes me remember how I felt, and the changes my body had when I was just turning into an adolescent. Also, it made me be afraid of wanting to re-do an entire stage of my life all over again, and not being able to. One of my biggest fears.",
        trailer: "https://www.youtube.com/embed/UQK5Hh0L1Sg?si=s4n6VbQP3DHHhGa1"
      },
      {
        cover: 'hansel-and-gretel.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Hansel & Gretel: Witch Hunters",
        case: 'hansel-and-gretel.png',
        scene: "hansel-and-gretel.png",
        description: "When I was a kid I loved the story of Hansel and Gretel, so when I heard about this movie I was so excited. And I was not disappointed. I still think it was a cool movie, I loved the new concept and action and the blood. I think it's cool.",
        trailer: "https://www.youtube.com/embed/p6wk1XySBTk?si=4ulOC49uGt0PBXqu"
      },
      {
        cover: 'forrest.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Forrest Gump",
        case: 'forrest.png',
        scene: "forrest.png",
        description: "Our History Teacher made us watch this in High School, we felt it was kind of boring at the beginning, but then we got hooked up by the story line. Very inspiring movie.",
        trailer: "https://www.youtube.com/embed/bLvqoHBptjg?si=lzH6jtW3qwv-hg6Y"
      },
      {
        cover: 'poets.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Dead Poets Society",
        case: 'poets.png',
        scene: "poets.png",
        description: "Another movie our History Teacher made us watch. It let me with a feeling of sadness and inspiration, for some reason. I have to watch it again.",
        trailer: "https://www.youtube.com/embed/ye4KFyWu2do?si=vsXsIldT7S-hv44-"
      },
      {
        cover: 'tomorrowland.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Tomorrowland",
        case: 'tomorrowland.png',
        scene: "tomorrowland.png",
        description: "This movie is very special to me, it keeps being an inspiration even when my life keeps changing. One of my favorites movies ever.",
        trailer: "https://www.youtube.com/embed/lWZ7O-RrATY?si=DtJilxajT2fLC1Nf"
      },
      {
        cover: 'divergent.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Divergent",
        case: 'divergent.png',
        scene: "divergent.png",
        description: "This is one of those movies that I can still relate, and it's still not cringe enough to make me want to trash it out. You know that thing about being a teenager that makes you feel like you have to chose a gang or a group of specific aestethic/characteristics to belong, or else. Or that feeling of having to take an important decision, even against the desires of your own family. That's something that feels like a strong shock being that young. Also, that feeling of being you against the world, like feeling like you are the only one going throught some shit, very childish but relatable hahaha.",
        trailer: "https://www.youtube.com/embed/Aw7Eln_xuWc?si=DjwpG2BvzREviGKx"
      },
      {
        cover: 'we-your-friends.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "We are your friends",
        case: 'we-your-friends.png',
        scene: "we-your-friends.png",
        description: "We were at some friends house, it was the last day of 2015, we were pretty bored, so one of us suggested we should look for something to watch on Netflix, really the first time I experienced Netflix. That's when we watched this movie, and even when it had its dumb scenes, it made a dull new year's eve a fun night to remember. The music was just amazing.",
        trailer: "https://www.youtube.com/embed/gZzAeYWXFpk?si=G7a8f6PHof_Wz948"
      },
      {
        cover: 'paper-towns.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Paper Towns",
        case: 'paper-towns.png',
        scene: "paper-towns.png",
        description: "This is one of those movies were I strongly identify with the male protagonist. He's quiet and very careful. Margo is that something he needed to push himself and do stuff. Cara Delevigne was the ultimate crush from the middle tens.",
        trailer: "https://www.youtube.com/embed/rFGiHm5WMLk?si=-9YejKEK9pv4OByW"
      },
      {
        cover: 'wallflower.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: 'Three Kings',
        case: 'wallflower.png',
        scene: "wallflower.png",
        description: "I watched this movie in a time I was completely lonely, completely rock bottom. Being in that position this movie was my first friend. I had to read the book after watching this, and it was I'd say interesting, and also very different from any other story I had read at the time.",
        trailer: "https://www.youtube.com/embed/2vb2qrcPEEs?si=7OvqRWJmuB2YWqA_"
      },
      
      {
        cover: 'edge-seventeen.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Edge Seventeen",
        case: 'edge-seventeen.png',
        scene: "edge-seventeen.png",
        description: "I was a teen that wanted some vanal conversation about life and stupid stuff teenagers worry about. And this made my day better.",
        trailer: "https://www.youtube.com/embed/vswj96INhmo?si=Q2wCkF6S-SFJ3yun"
      },
      {
        cover: 'warm-bodies.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Warm Bodies",
        case: 'warm-bodies.png',
        scene: "warm-bodies.png",
        description: "I loved this romance/comedy. I feel it was very well executed despite the irony of the story and the low budget CGI. You can say the story was what saved this movie from being just another cringe juvenille fail. I still watch this once in a while.",
        trailer: "https://www.youtube.com/embed/07s-cNFffDM?si=gRK65aZFS7C-TK96"
      },
      {
        cover: 'nerve.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "NERVE",
        case: 'nerve.png',
        scene: "nerve.png",
        description: "I watched this in a time I was pressuring myself to take risks, at least to take action, so it fit perfectly in the kind of content I wanted to be exposed. Very relatable for me at the time in a lot of ways.",
        trailer: "https://www.youtube.com/embed/2PR9MOPTI7g?si=LQSB5YD9lDI4w0WO"
      },
      {
        cover: 'ready-player-one.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Ready Player One",
        case: 'ready-player-one.png',
        scene: "ready-player-one.png",
        description: "A movie that still makes me hopeful about the future. Amazing that a lot of the things showed in this movie are finally becoming reality.",
        trailer: "https://www.youtube.com/embed/cSp1dM2Vj48?si=bqCfAMcqnnw0JaOU"
      },
      {
        cover: 'wolf.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Wolf of Wallstreet",
        case: 'wolf.png',
        scene: "wolf.png",
        description: "This movie was based in real life events, so it made me accept and see how distorded is real life in some places or instances. On the other hand, this movie is the definition Rock N' Roll.",
        trailer: "https://www.youtube.com/embed/iszwuX1AK6A?si=ZL_donKNucGQ-92e"
      },
      {
        cover: 'les-miserables.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Les Miserables",
        case: 'les-miserables.png',
        scene: "les-miserables.png",
        description: "I was impressed by this musical, I usually hate musicals, but this one is outstanding. Beautiful piece of art. Loved Anne Hathaway's acting here. She really earned that Oscar.",
        trailer: "https://www.youtube.com/embed/YmvHzCLP6ug?si=TIJaEZljPkh_MqfB"
      },
      {
        cover: 'single.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "How To Be Single",
        case: 'single.png',
        scene: "single.png",
        description: "This movie is how I felt when I first lived by my own. But instead of New York, I was living the the middle of nowhere, kinda haha. It made me feel better about myself.",
        trailer: "https://www.youtube.com/embed/akwGjUeU6YA?si=irglp4gscwPNjmBC"
      },
      {
        cover: 'bling-ring.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Bling Ring",
        case: 'bling-ring.png',
        scene: "bling-ring.png",
        description: "I just found out this movie was directed by Sofia Coppola and it was produced by A24, I'm shocked. Anyways, loved the movie, watched it for the 'based-in-real-life' thing, and because of Emma Watson, stayed for the music, amazing soundtrack, cocky as fuck. Can't believe all this happened while I had no access to internet back in 2009.",
        trailer: "https://www.youtube.com/embed/NcE2fj-EtJY?si=62bEUtwoOgPgDBnL"
      },
      {
        cover: 'xoxo.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "XOXO",
        case: 'xoxo.png',
        scene: "xoxo.png",
        description: "My favorite movie from 2017 probably. Mostly because I was in the middle of my own movie plot, and this was naive-inspiring in everyway. The music has that feeling of everything's-gonna-be-alright-the-wrold-is-full-of-rainbows and stuff like that. Love that feeling.",
        trailer: "https://www.youtube.com/embed/bUN5uSu_VQM?si=wzx1qAMJQW8Y6UeE"
      },
      {
        cover: 'interestelar.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Interstellar",
        case: 'interestelar.png',
        scene: "interestelar.png",
        description: "This movie made me cry. And inspired me to keep going with my path in technology. Very well done story, great CGI, amazing acting. After watching the movie for the first time, I didn't know what to do, like, the impact it had on me at the time. A great movie.",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=UZs1tT-kmhMC8CMl"
      },
      {
        cover: 'captain-america.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Captain America: The firsst Avenger",
        case: 'captain-america.png',
        scene: "captain-america.png",
        description: "I remember the adds from 2011 promoting this movie, and I remember I was sad that we couldn't afford tickets for the movies. Years later a friend of mine convinced me to watch all the marvel movies before the premier of The Avengers: End Game. This was by far, my favorite movie. It had a beautiful script and the design of the character was on point. Amazing movie that reminded me how obsessed I was with American History when I was like 14.",
        trailer: "https://www.youtube.com/embed/JerVrbLldXw?si=9DOQvz9Yk3BwogCx"
      },
      {
        cover: 'simple-favor.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "A Simple Favor",
        case: 'simple-favor.png',
        scene: "simple-favor.png",
        description: "I only watched this movie because Anna Kendrick was there. But I was surprised by the amazing and fun plot, and of course, the soundtrack was the top of the notch, loved the French music they selected for the movie. And I learned a new word: BROTHERFUCKEER!",
        trailer: "https://www.youtube.com/embed/rAqMlh0b2HU?si=ZGZ8vrG6S3qmJq62"
      },
      {
        cover: 'happiest.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Happiest Season",
        case: 'happiest.png',
        scene: "happiest.png",
        description: "I paid Hulu just so I could watch this movie right away. It was not available outside the US so I had to make my way in. I was excited because of the unusual setting of the story: Kristen Stewart was gonna be in a family comedy, and the comedy was gonna be about the difficult relationship between Abby and her closseted girlfriend Harper. I loved the story.",
        trailer: "https://www.youtube.com/embed/h58HkQV1gHY?si=ti3XU2yUyVUdFc8e"
      },
      {
        cover: 'half-of-it.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Half of It",
        case: 'half-of-it.png',
        scene: "half-of-it.png",
        description: "OMG this movie was really not too elaborated. It was very simple, but it touched my heart. Mainly because I lived a situation that made this feel very familiar. The end was heartbreaking, so beautiful.",
        trailer: "https://www.youtube.com/embed/B-yhF7IScUE?si=dW4WSdes4FCco7Wy"
      },
      {
        cover: 'breakfast.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Breakfast at Tiffany's",
        case: 'breakfast.png',
        scene: "breakfast.png",
        description: "Audrey Hepburn's most iconic rol in my opinion. Her character here is my spirit animal. Beautiful movie. The 'Moon River' song is precious. My favorite movie from the 60's. Love Audrey Hepburn and the cat.",
        trailer: "https://www.youtube.com/embed/KlZ4fYqjGJI?si=5sga3qhnR6NNDCpt"
      },
      {
        cover: 'ferris.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Ferris Bueller's Day Off",
        case: 'ferris.png',
        scene: "ferris.png",
        description: "I'm just gonna say: I wish I had watched this when I was younger. I was always a quiet child, afraid of everything, and it took me too much time to get over my fears. My favorite movie from the 80's.",
        trailer: "https://www.youtube.com/embed/0ZDbKhkLxTs?si=Qv_s3CY7wyvzuDhA"
      },
      {
        cover: 'my-chemical.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "My Chemical Romance: Life on the murder scene",
        case: 'my-chemical.png',
        scene: "my-chemical.png",
        description: "This documentary made me admire Gerard Way with all my heart. He's one of my icons. Love his work, in music and comics. His work is a real inspiration to me. This made me value so much the fact that I lived when emo style was popular, those times had its magic.",
        trailer: "https://www.youtube.com/embed/uGM8S3OoULI?si=j4Ku003a2a_UKb6f"
      },
      {
        cover: 'bombshell.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Bombshell: The Hedy Lamarr Story",
        case: 'bombshell.png',
        scene: "bombshell.png",
        description: "I can't describe how much I admire this woman. Probably my ultimate crush ever. Amazing story, iconic actress, and a pioner inventor.",
        trailer: "https://www.youtube.com/embed/wa_AA_byQ58?si=uxvGQW94zY6KCLiH"
      },
      
     
      
      
      
      {
        cover: 'ricardos.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "ricardos",
        case: 'ricardos.png',
        scene: "ricardos.png",
        description: "I Love 'I love Lucy', we found her show when I was looking for something to watch on Hulu. One of the funniest shows I've ever watched. And now after seeing the recreation of her life I admire her as a person. An extraordinary work by Nicole Kidman",
        trailer: "https://www.youtube.com/embed/WvrjCdtB0zM?si=NFh1k0t_phyZwjsZ"
      },
      {
        cover: 'disobedience.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Disobedience",
        case: 'disobedience.png',
        scene: "disobedience.png",
        description: "An interesting queer story about love in a Jewish community. I found that to be the fact that enriched the most the plot of the movie. It was very simple but it did the job. Also, the sexual scene between Rachel Weiz and Rachel McAdams was kind of weird, at some point I just laughed because of the way it was design to be, anyways I liked the story. Even though I watched Carol, which had an incredible soundtrack by the way, I liked the social setting of this one more.",
        trailer: "https://www.youtube.com/embed/HEVonh8bjC0?si=bQZmzMIEN3GjSJ8S"
      },
      {
        cover: 'blade-runner-2049.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Blade Runner 2049",
        case: 'blade-runner-2049.png',
        scene: "blade-runner-2049.png",
        description: "This movie made me fell in love with the cyberpunk aesthetic and the story of the origin of this style. I remember seeing the posters of this movie all over the city, but I wasn't able to watch it cause I was the poorest I've ever been haha, but that feeling definitely felt similar to the vibe of the movie, like pure desolation.",
        trailer: "https://www.youtube.com/embed/gCcx85zbxz4?si=v7G3MTJ3Ulyk2Xdr"
      },
      {
        cover: 'hackers.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Hackers",
        case: 'hackers.png',
        scene: "hackers.png",
        description: "Another 90's movie that makes me feel at home for reasons I already explained. It's an amazing plus Angelina Jolie is here and the movie is about hacking, something I want to learn in a near future.",
        trailer: "https://www.youtube.com/embed/piI9vJ9-UZ0?si=i2tH4IS7QU1G-yZA"
      },
      {
        cover: 'metal-lords.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Metal Lords",
        case: 'metal-lords.png',
        scene: "metal-lords.png",
        description: "After being part of a Music House in La Molina something clicked on me, I mean I was exposed to so much music in 2016 that it changed my relationship with it. Also, now I appreciate more metal and hard rock. I wanted to watch this movie for that reason, but it ended up being a great movie, well elaborated and with a good plot. Very entertaining, I didn't expect it to be that good.",
        trailer: "https://www.youtube.com/embed/TzAAtZx6xzk?si=0UsvZ0aLc5csGSvk"
      },
      {
        cover: 'thelma.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Thelma",
        case: 'thelma.png',
        scene: "thelma.png",
        description: "I feel like this would be an exagerated representation of my state of mind if I was Noruegian :v. Loved the plot and the mistery behind the protagonist powers. I feel like it's very poetic and methaphoric.",
        trailer: "https://www.youtube.com/embed/vgQMHG9SGlU?si=KMPARlfYhAqU021y"
      },
      {
        cover: 'angele.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Angèle",
        case: 'angele.png',
        scene: "angele.png",
        description: "Love stories about people following their dreams and achieving them. Probably because I tried it and it worked somehow, but also because it teaches me other ways to do it, how other dreams are achieved, different paths in life I have no access to.",
        trailer: "https://www.youtube.com/embed/yw0rs2z1KXA?si=r0P0dmsfurWz-zV5"
      },
      {
        cover: 'fall.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "The Anatomy of a Fall",
        case: 'fall.png',
        scene: "fall.png",
        description: "I was dessatisfied with the fact that this movie didn't give us the answer we wanted at the end. But then I understood, that was not the point. Loved the way nobody really knows what happened, not even us, the public hahaha. I watched this as a copping mechanism to get over my own illness, ended up being an amazing decision.",
        trailer: "https://www.youtube.com/embed/MJlpGZuE4R4?si=dUz792f8kY0m2Z6v"
      },
      {
        cover: 'wach.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Wach",
        case: 'wach.png',
        scene: "wach.png",
        description: "This movie reminded me of how much I liked edgy movies when I was a teenager. I liked what Kim Frank did here with the little money he had, it looks like a movie made by MTV.",
        trailer: "https://www.youtube.com/embed/U5nP9Mk3VgE?si=trrLz9NMmM76EyQr"
      },
      {
        cover: 'wir-konnen.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Wir können nicht anders",
        case: 'wir-konnen.png',
        scene: "wir-konnen.png",
        description: "I watched this just because Alli Neumann was here, and I was looking for new german content. I like this movie not because it's great, but because it's a total mess 😂. Loved Alli Neumann's acting, as always. Loved the mix of good and bad acting, good and bad plot ideas, christmas and bloody stuff happening just because. I liked this movie because it was bad hahaha. And the best part was the end when the final message was: 'None of this had to happen, but that's life'. That was the perfect ending for such a messy movie, I loved it.",
        trailer: "https://www.youtube.com/embed/dj0Uu4bDvMQ?si=TMipPdn6zlbb_q43"
      },
      {
        cover: 'smile-2.png',
        director: 'Shakira',
        protagonists: ['Hilary Duff', 'Chad Michael Murray', 'Jennifer Coolidge'],
        movieName: "Smile 2",
        case: 'smile-2.png',
        scene: "smile-2.png",
        description: "First horror movie I've ever watched just because, kinda. I'm not saying it's the best ever, but I really liked the story, the colors, the camara angles and the sound effects they used for quiet scenes. The best part was definitely the acting work of Naomi Scott, I'm pretty sure this movie would've failed without her acting, because it would've been difficult to ignore the areas where the movie was lacking attention.",
        trailer: "https://www.youtube.com/embed/FU_bAopCcSE?si=FlkuI7bozhVyasCb"
      },
      
      
      
      
    ]

    constructor(private movieService: MovieService, private _sanitizer: DomSanitizer) {}

    ngOnInit() {
       this.movieServiceSub = this.movieService.indexChanged.subscribe(
        (newVal) => {
          this.selectedIndex = newVal;
        }
      );
     }

     getTrailer(selectedId: number) {
       console.log('selectedId', selectedId)
      return this._sanitizer.bypassSecurityTrustResourceUrl(this.shelvesLevels[selectedId].trailer);
     }
  }