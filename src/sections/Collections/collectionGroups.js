import categoryItems from "@/sections/Categories/categoryItems"

const collectionGroups = [
  {
    isActive: true,
    title: "Movies",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/5-action.jpg",
              "/src/assets/images/categories/action/6-action.jpg",
              "/src/assets/images/categories/action/7-action.jpg",
              "/src/assets/images/categories/action/8-action.jpg",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/5-adventure.jpg",
              "/src/assets/images/categories/adventure/6-adventure.jpg",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/5-comedy.jpg",
              "/src/assets/images/categories/comedy/6-comedy.jpg",
              "/src/assets/images/categories/comedy/7-comedy.jpg",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/5-drama.jpg",
              "/src/assets/images/categories/drama/6-drama.jpg",
              "/src/assets/images/categories/drama/7-drama.jpg",
              "/src/assets/images/categories/drama/8-drama.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1-action.jpg",
              "/src/assets/images/categories/action/2-action.jpg",
              "/src/assets/images/categories/action/3-action.jpg",
              "/src/assets/images/categories/action/4-action.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/3-adventure.jpg",
              "/src/assets/images/categories/adventure/4-adventure.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1-comedy.jpg",
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/3-comedy.jpg",
              "/src/assets/images/categories/comedy/4-comedy.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1-drama.jpg",
              "/src/assets/images/categories/drama/2-drama.jpg",
              "/src/assets/images/categories/drama/3-drama.jpg",
              "/src/assets/images/categories/drama/4-drama.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/5-action.jpg",
              "/src/assets/images/categories/action/6-action.jpg",
              "/src/assets/images/categories/action/7-action.jpg",
              "/src/assets/images/categories/action/8-action.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/5-adventure.jpg",
              "/src/assets/images/categories/adventure/6-adventure.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/5-comedy.jpg",
              "/src/assets/images/categories/comedy/6-comedy.jpg",
              "/src/assets/images/categories/comedy/7-comedy.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/5-drama.jpg",
              "/src/assets/images/categories/drama/6-drama.jpg",
              "/src/assets/images/categories/drama/7-drama.jpg",
              "/src/assets/images/categories/drama/8-drama.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1-action.jpg",
              "/src/assets/images/categories/action/2-action.jpg",
              "/src/assets/images/categories/action/3-action.jpg",
              "/src/assets/images/categories/action/4-action.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/3-adventure.jpg",
              "/src/assets/images/categories/adventure/4-adventure.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1-comedy.jpg",
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/3-comedy.jpg",
              "/src/assets/images/categories/comedy/4-comedy.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1-drama.jpg",
              "/src/assets/images/categories/drama/2-drama.jpg",
              "/src/assets/images/categories/drama/3-drama.jpg",
              "/src/assets/images/categories/drama/4-drama.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1-movies.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Kisi Ka Bhai Kisi Ki Jaan",
            imgSrc: "/src/assets/images/movies/2-movies.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mangal bhari",
            imgSrc: "/src/assets/images/movies/3-movies.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4-movies.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-Man",
            imgSrc: "/src/assets/images/movies/5-movies.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1-movies.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Kisi Ka Bhai Kisi Ki Jaan",
            imgSrc: "/src/assets/images/movies/2-movies.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mangal bhari",
            imgSrc: "/src/assets/images/movies/3-movies.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4-movies.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-Man",
            imgSrc: "/src/assets/images/movies/5-movies.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1-movies.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Kisi Ka Bhai Kisi Ki Jaan",
            imgSrc: "/src/assets/images/movies/2-movies.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mangal bhari",
            imgSrc: "/src/assets/images/movies/3-movies.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4-movies.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-Man",
            imgSrc: "/src/assets/images/movies/5-movies.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1-movies.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Kisi Ka Bhai Kisi Ki Jaan",
            imgSrc: "/src/assets/images/movies/2-movies.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mangal bhari",
            imgSrc: "/src/assets/images/movies/3-movies.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4-movies.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-Man",
            imgSrc: "/src/assets/images/movies/5-movies.jpg",
            duration: "1h 42min",
            views: "5K",
          },
        ],
      },
      {
        title: "New Releases",
        movieItems: [
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/newMovies/1-newMovies.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "The Foreigner",
            imgSrc: "/src/assets/images/newMovies/2-newMovies.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            },
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/newMovies/3-newMovies.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            },
          },
          {
            title: "The Tomorrow War",
            imgSrc: "/src/assets/images/newMovies/4-newMovies.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            },
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/newMovies/5-newMovies.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            },
          },

          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/newMovies/1-newMovies.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "The Foreigner",
            imgSrc: "/src/assets/images/newMovies/2-newMovies.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            },
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/newMovies/3-newMovies.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            },
          },
          {
            title: "The Tomorrow War",
            imgSrc: "/src/assets/images/newMovies/4-newMovies.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            },
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/newMovies/5-newMovies.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            },
          },

          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/newMovies/1-newMovies.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "The Foreigner",
            imgSrc: "/src/assets/images/newMovies/2-newMovies.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            },
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/newMovies/3-newMovies.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            },
          },
          {
            title: "The Tomorrow War",
            imgSrc: "/src/assets/images/newMovies/4-newMovies.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            },
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/newMovies/5-newMovies.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            },
          },

          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/newMovies/1-newMovies.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            },
          },
          {
            title: "The Foreigner",
            imgSrc: "/src/assets/images/newMovies/2-newMovies.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            },
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/newMovies/3-newMovies.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            },
          },
          {
            title: "The Tomorrow War",
            imgSrc: "/src/assets/images/newMovies/4-newMovies.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            },
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/newMovies/5-newMovies.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            },
          },
        ],
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Kantara",
            imgSrc: "/src/assets/images/popMovies/1-popMovies.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Pushpa: The Rule",
            imgSrc: "/src/assets/images/popMovies/2-popMovies.jpg",
            duration: "1h 30min",
            rating: {
              value: 4,
              label: "20K",
            },
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/popMovies/3-popMovies.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/popMovies/4-popMovies.jpg",
            duration: "2h 10min",
            rating: {
              value: 4,
              label: "20K",
            },
          },

          {
            title: "Kantara",
            imgSrc: "/src/assets/images/popMovies/1-popMovies.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Pushpa: The Rule",
            imgSrc: "/src/assets/images/popMovies/2-popMovies.jpg",
            duration: "1h 30min",
            rating: {
              value: 4,
              label: "20K",
            },
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/popMovies/3-popMovies.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/popMovies/4-popMovies.jpg",
            duration: "2h 10min",
            rating: {
              value: 4,
              label: "20K",
            },
          },

          {
            title: "Kantara",
            imgSrc: "/src/assets/images/popMovies/1-popMovies.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Pushpa: The Rule",
            imgSrc: "/src/assets/images/popMovies/2-popMovies.jpg",
            duration: "1h 30min",
            rating: {
              value: 4,
              label: "20K",
            },
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/popMovies/3-popMovies.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/popMovies/4-popMovies.jpg",
            duration: "2h 10min",
            rating: {
              value: 4,
              label: "20K",
            },
          },

          {
            title: "Kantara",
            imgSrc: "/src/assets/images/popMovies/1-popMovies.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Pushpa: The Rule",
            imgSrc: "/src/assets/images/popMovies/2-popMovies.jpg",
            duration: "1h 30min",
            rating: {
              value: 4,
              label: "20K",
            },
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/popMovies/3-popMovies.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            },
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/popMovies/4-popMovies.jpg",
            duration: "2h 10min",
            rating: {
              value: 4,
              label: "20K",
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },

  {
    title: "Shows",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/9-action.jpg",
              "/src/assets/images/categories/action/10-action.jpg",
              "/src/assets/images/categories/action/11-action.jpg",
              "/src/assets/images/categories/action/12-action.jpg",
            ],
          },
          {
            title: "Adventure",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/5-adventure.jpg",
              "/src/assets/images/categories/adventure/6-adventure.jpg",
            ],
          },
          {
            title: "Comedy",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/5-comedy.jpg",
              "/src/assets/images/categories/comedy/6-comedy.jpg",
              "/src/assets/images/categories/comedy/7-comedy.jpg",
            ],
          },
          {
            title: "Drama",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/5-drama.jpg",
              "/src/assets/images/categories/drama/6-drama.jpg",
              "/src/assets/images/categories/drama/7-drama.jpg",
              "/src/assets/images/categories/drama/8-drama.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/9-action.jpg",
              "/src/assets/images/categories/action/10-action.jpg",
              "/src/assets/images/categories/action/11-action.jpg",
              "/src/assets/images/categories/action/12-action.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/3-adventure.jpg",
              "/src/assets/images/categories/adventure/4-adventure.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1-comedy.jpg",
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/3-comedy.jpg",
              "/src/assets/images/categories/comedy/4-comedy.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1-drama.jpg",
              "/src/assets/images/categories/drama/2-drama.jpg",
              "/src/assets/images/categories/drama/3-drama.jpg",
              "/src/assets/images/categories/drama/4-drama.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/9-action.jpg",
              "/src/assets/images/categories/action/10-action.jpg",
              "/src/assets/images/categories/action/11-action.jpg",
              "/src/assets/images/categories/action/12-action.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/5-adventure.jpg",
              "/src/assets/images/categories/adventure/6-adventure.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/5-comedy.jpg",
              "/src/assets/images/categories/comedy/6-comedy.jpg",
              "/src/assets/images/categories/comedy/7-comedy.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/5-drama.jpg",
              "/src/assets/images/categories/drama/6-drama.jpg",
              "/src/assets/images/categories/drama/7-drama.jpg",
              "/src/assets/images/categories/drama/8-drama.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1-action.jpg",
              "/src/assets/images/categories/action/2-action.jpg",
              "/src/assets/images/categories/action/3-action.jpg",
              "/src/assets/images/categories/action/4-action.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/adventure/1-adventure.jpg",
              "/src/assets/images/categories/adventure/2-adventure.jpg",
              "/src/assets/images/categories/adventure/3-adventure.jpg",
              "/src/assets/images/categories/adventure/4-adventure.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/comedy/1-comedy.jpg",
              "/src/assets/images/categories/comedy/2-comedy.jpg",
              "/src/assets/images/categories/comedy/3-comedy.jpg",
              "/src/assets/images/categories/comedy/4-comedy.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/drama/1-drama.jpg",
              "/src/assets/images/categories/drama/2-drama.jpg",
              "/src/assets/images/categories/drama/3-drama.jpg",
              "/src/assets/images/categories/drama/4-drama.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Shows Now",
        movieItems: [
          {
            title: "Stranger Things 3",
            imgSrc: "/src/assets/images/shows/1-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist Part 4 ",
            imgSrc: "/src/assets/images/shows/2-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3-shows.jpg",
            duration: "14h 30min",
            season: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },

          {
            title: "Stranger Things 3",
            imgSrc: "/src/assets/images/shows/1-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist Part 4 ",
            imgSrc: "/src/assets/images/shows/2-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3-shows.jpg",
            duration: "14h 30min",
            season: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },

          {
            title: "Stranger Things 3",
            imgSrc: "/src/assets/images/shows/1-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist Part 4 ",
            imgSrc: "/src/assets/images/shows/2-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3-shows.jpg",
            duration: "14h 30min",
            season: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },

          {
            title: "Stranger Things 3",
            imgSrc: "/src/assets/images/shows/1-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist Part 4 ",
            imgSrc: "/src/assets/images/shows/2-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3-shows.jpg",
            duration: "14h 30min",
            season: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "New Released Shows",
        movieItems: [
          {
            title: "High Town",
            imgSrc: "/src/assets/images/shows/5-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapure",
            imgSrc: "/src/assets/images/shows/6-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: Into the Shadows",
            imgSrc: "/src/assets/images/shows/7-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8-shows.jpg",
            duration: "10h 30min",
            season: "3 Season",
            href: "/show",
          },

          {
            title: "High Town",
            imgSrc: "/src/assets/images/shows/5-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapure",
            imgSrc: "/src/assets/images/shows/6-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: Into the Shadows",
            imgSrc: "/src/assets/images/shows/7-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8-shows.jpg",
            duration: "10h 30min",
            season: "3 Season",
            href: "/show",
          },

          {
            title: "High Town",
            imgSrc: "/src/assets/images/shows/5-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapure",
            imgSrc: "/src/assets/images/shows/6-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: Into the Shadows",
            imgSrc: "/src/assets/images/shows/7-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8-shows.jpg",
            duration: "10h 30min",
            season: "3 Season",
            href: "/show",
          },

          {
            title: "High Town",
            imgSrc: "/src/assets/images/shows/5-shows.jpg",
            duration: "12h 23min",
            season: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapure",
            imgSrc: "/src/assets/images/shows/6-shows.jpg",
            duration: "7h 40min",
            season: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: Into the Shadows",
            imgSrc: "/src/assets/images/shows/7-shows.jpg",
            duration: "8h 20min",
            season: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8-shows.jpg",
            duration: "10h 30min",
            season: "3 Season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Must - Watch Shows",
        movieItems: [
          {
            title: "Duranga",
            imgSrc: "/src/assets/images/popShows/1-popShows.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            },
          },
          {
            title: "Money Heist Part 3",
            imgSrc: "/src/assets/images/popShows/2-popShows.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            },
          },
          {
            title: "MAI",
            imgSrc: "/src/assets/images/popShows/3-popShows.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            },
          },
          {
            title: "Stranger Things Part 3",
            imgSrc: "/src/assets/images/popShows/4-popShows.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            },
          },

          {
            title: "Duranga",
            imgSrc: "/src/assets/images/popShows/1-popShows.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            },
          },
          {
            title: "Money Heist Part 3",
            imgSrc: "/src/assets/images/popShows/2-popShows.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            },
          },
          {
            title: "MAI",
            imgSrc: "/src/assets/images/popShows/3-popShows.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            },
          },
          {
            title: "Stranger Things Part 3",
            imgSrc: "/src/assets/images/popShows/4-popShows.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            },
          },

          {
            title: "Duranga",
            imgSrc: "/src/assets/images/popShows/1-popShows.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            },
          },
          {
            title: "Money Heist Part 3",
            imgSrc: "/src/assets/images/popShows/2-popShows.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            },
          },
          {
            title: "MAI",
            imgSrc: "/src/assets/images/popShows/3-popShows.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            },
          },
          {
            title: "Stranger Things Part 3",
            imgSrc: "/src/assets/images/popShows/4-popShows.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            },
          },

          {
            title: "Duranga",
            imgSrc: "/src/assets/images/popShows/1-popShows.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            },
          },
          {
            title: "Money Heist Part 3",
            imgSrc: "/src/assets/images/popShows/2-popShows.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            },
          },
          {
            title: "MAI",
            imgSrc: "/src/assets/images/popShows/3-popShows.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            },
          },
          {
            title: "Stranger Things Part 3",
            imgSrc: "/src/assets/images/popShows/4-popShows.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            },
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
]

export default collectionGroups
