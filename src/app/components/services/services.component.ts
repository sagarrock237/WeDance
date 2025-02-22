import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  servicePopup = false;
  head:any;
  content1: any;
  content2:any;

  openPopUp(head: any, content1: any, content2: any) {
    this.servicePopup = true
    this.content1 = content1
    this.content2 = content2
    this.head = head
  }

  closePopup(){
    this.servicePopup = false
  }

  serviceDataArray = [
    {
      head: 'Ladies Sangeet',
      content1: 'We provide personalized lessons, easy-to-follow routines, and a supportive atmosphere, ensuring everyone feels like a star on the dance floor. Join us in creating unforgettable memories as we transform your Sangeet into a dazzling dance extravaganza!',
      content2: 'Starting Price : 30,000 per 10 songs'
    },
    {
      head: 'Bride and Groom entry',
      content1: 'The Bride & Groom Entry is a cherished moment that sets the tone for the celebration of love during weddings. This enchanting routine serves as a memorable introduction for the newlyweds as they make their grand entrance into the reception, captivating their guests with a blend of elegance, joy, and a touch of fun.',
      content2: 'Starting Price 1,00,000 it may cost goes higher according on your needs .'
    },
    {
      head: 'Couple dance',
      content1: 'Experience the magic of love come to life with our captivating couple dance performance, designed specifically for weddings. This beautifully choreographed routine blends elegance and emotion, perfectly reflecting the unique bond between two people celebrating their special day. From the first graceful twirl to the heartfelt finale, every movement tells a story of romance and joy.',
      content2: 'Starting Price : 6,000'
    },
    {
      head: 'Solo dance',
      content1: "As much as there is excitement for a solo dance performance, there is also the same pressure as to whether the dance will be good or not, but don't worry, when the WedDance team is with you, we train you in such a way that you can perform on your special day, and make your performance remarkable.",
      content2: 'Starting Price : 5,000'
    },
    {
      head: 'Wedding Choreography',
      content1: 'We create a bespoke choreography that weaves together various dance styles, ensuring that each family member feels comfortable and included. we provide step-by-step instructions, practice sessions, and tips to ensure a seamless performance on the big day.',
      content2: 'Starting Price : 30,000 per 10 songs'
    },
    {
      head: 'Event Dance Choreography',
      content1: "Event dance choreography Creating a dance choreography for an event can be a fun and creative process. Consider the audience and the setting to tailor the performance accordingly. Choose a song or a series of songs that fit the theme and have a tempo and mood suitable for the dance style you envision. Decide on a dance style that suits the music and the dancers' strengths like hip-hop, contemporary, ballroom, etc. Experiment with formations, levels, and directions to add visual interest. Ensure Schedule Consider costumes that enhance the theme and allow for movement. If using props, ensure they are integrated seamlessly into the choreography",
      content2: 'Starting Price 1,00,000 it may cost goes higher according on your needs.'
    },
    {
      head: 'Groom Entry Themes',
      content1: "The groom's entry brings together the vibrant energy of dance and the artistry of carefully curated props. This captivating performance is designed to create a memorable moment as the groom makes his grand entrance, captivating all in attendance. The inclusion of props enhances the performance, adding layers of creativity and engagement.",
      content2: 'Starting Price: 1,50,000 it may cost goes higher according on your needs .'
    },
    {
      head: 'Bride Entry Theme',
      content1: "Every bride wants a dream entry , and our team of talented dancers brings this enchanting vision to life. Combining grace, elegance, and creativity, our Bride Entry Theme specialize in crafting mesmerizing performances that set the tone for one of life’s most cherished events.",
      content2: 'Starting Price: 1,50,000 it may cost goes higher according on your needs .'
    },
    {
      head: 'Group Dance',
      content1: "The heart of every unforgettable wedding lies the magic of dance, and group dance brings that magic in the performances. We specialize in creating stunning, personalized group dance routines that elevate weddings to an extraordinary experience. Together, we’ll create a performance that you and your guests will cherish forever!",
      content2: 'Starting Price: 5,000'

    },
    {
      head: 'Friends Dance',
      content1: 'A vibrant and heartwarming dance performance brought together a group of close-knit friends, the group transformed the event into a memorable highlight, reminding everyone of the beauty of love, friendship, and celebration.',
      content2: 'Starting Price: 5,000'
    },

    {
      head: 'Grand Varmala Designing',
      content1: 'The Varmala ceremony, a beautiful and traditional Indian wedding ritual, is a vibrant celebration that marks the union of two souls through the exchange of floral garlands. The Varmala bride and groom not only celebrate their love but also honor the rich traditions that have brought them together.',
      content2: 'Starting Price: 1,50,000 it may cost goes higher according on your needs .'
    },
    {
      head: 'Flashmob',
      content1: 'The concept of a flashmob—where a group of individuals suddenly assembles in a public space to perform a choreographed routine—lies at the heart of the collective’s mission. Our flashmob performances are not just about the dance; they are a celebration of life, spontaneity, and the power of unity through movement.',
      content2: 'Starting Price: 5,000'
    }
  ]
}
