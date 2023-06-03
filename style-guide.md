# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

--Soft-red: hsl(7, 99%, 70%);
--Yellow: hsl(51, 100%, 49%);
--Dark-desaturated-cyan : hsl(167, 40%, 24%);
--Dark-blue: hsl(198, 62%, 26%);
--Dark-moderate-cyan: hsl(168, 34%, 41%);

### Neutral

--Very-dark-desaturated-blue: hsl(212, 27%, 19%);
--Very-dark-grayish-blue: hsl(213, 9%, 39%);
--Dark-grayish-blue: hsl(232, 10%, 55%);
--Grayish-blue: hsl(210, 4%, 67%);
--White: hsl(0, 0%, 100%);

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Barlow](https://fonts.google.com/specimen/Barlow)
- Weights: 600
- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700, 900

## Icons

We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)


    .homeSection{
        background-image: url(images/mobile/image-header.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .navLinks{
       flex-direction: column;
    }

    .menuToggle.active,
    .menuOpen.active{
        display: block;
    }

    .servicesSection{
        grid-template-columns: 1fr;
    }

    .boxContainer{
        width: 100%;
        text-align: center;
        padding: 8rem 3rem;
    }

    .servicesSection .normalTitle{
        margin-bottom: 2rem;
        font-size: 4rem;
        
    }
    
     .info{
        font-size: 2rem;
        margin-bottom: 4rem;
    }
    
    .boxOne .smallTitle,
    .boxFour .smallTitle{
        font-size: 2rem;
    }
    
    .smallContainer{
        width: 100%;
        padding: 0 2.5rem;
    }

    .smallContainer .smallTitle{
        font-size: 4rem;
    }

      .ctaBox{
        flex-direction: column;

      }

      .cta .normalTitle{
        font-size: 1.8rem;
    }
    
    .person img{
        border-radius: 50%;
        width: 100px;
        margin-bottom: 3rem;
    }
    
    .person .smallTitle{
        font-size: 2rem;
    }
    
    
    .person small{
        font-size: 1.3rem;
    }
    
      .projectSection{
        grid-template-columns: repeat(2, 1fr);
      }
