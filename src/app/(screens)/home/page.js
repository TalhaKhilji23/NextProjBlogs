import CategoryComponent from "@/app/components/categoryComponent";
import FeaturedComponent from "@/app/components/featuredComponent";
import BigFeatured from "@/app/components/BigFeatured";
import PostsComponent from "@/app/components/PostsComponent";

const categories = [
  { category: "Technology", imageUrl: "/images/breakimg.jpeg" },
  { category: "Nature", imageUrl: "/images/riceimg.jpeg" },
  { category: "Food", imageUrl: "/images/foodpicture.jpeg" },
  { category: "Sports", imageUrl: "/images/saladimg.jpg" },
  { category: "Travel", imageUrl: "/images/userImage.png" },
  { category: "Sports", imageUrl: "/images/saladimg.jpg" },
  { category: "Travel", imageUrl: "/images/userImage.png" },
  { category: "Travel", imageUrl: "/images/userImage.png" },
];

const featuredBlogs = [
  { title: "Technology", imageUrl: "/images/car.png", subtitle: "This is a blog about technology" },
  { title: "Girl", imageUrl: "/images/redg.png", subtitle: "This is a blog about food" },
];

const postsData = [
  { 
    imageUrl: "/images/boat.png",
    title: "Post 1",
    subtitle: "This is the first post",
    userImage: "/images/userImage.png",
    userName: "User 1",
    date: "July 1, 2024",
  },
  { 
    imageUrl: "/images/lappi.png",
    title: "Post 2",
    subtitle: "This is the second post",
    userImage: "/images/userImage.png",
    userName: "User 2",
    date: "July 2, 2024",
  },
  { 
    imageUrl: "/images/porche.png",
    title: "Post 3",
    subtitle: "This is the third post",
    userImage: "/images/userImage.png",
    userName: "User 3",
    date: "July 3, 2024",
  },
  { 
    imageUrl: "/images/hamburger.png",
    title: "Post 4",
    subtitle: "This is the fourth post",
    userImage: "/images/userImage.png",
    userName: "User 4",
    date: "July 4, 2024",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto mt-6">
      <div className="flex flex-wrap h-16 rounded-xl w-full bg-[#F5F5F5]">
        {categories.map((item, index) => (
          <div key={index} className="m-2 sm:m-2 md:m-2 lg:m-2 xl:m-2">
            <CategoryComponent
              category={item.category}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="md:col-span-1 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredBlogs.map((item, index) => (
            <FeaturedComponent
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <div className="col-span-1">
          <BigFeatured />
        </div>
        
       
      </div>
      <div className="flex ">
        <div className="bg-red-600 h-2 w-1   mt-7"></div>
        <h1 className="text-left ml-2 mt-5 text-xl">
          Popular Posts
        </h1>
      </div>
       <div className="flex  flex-wrap mt-4">
          {postsData.map((post, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2  ">
              <PostsComponent
                imageUrl={post.imageUrl}
                title={post.title}
                subtitle={post.subtitle}
                userImage={post.userImage}
                userName={post.userName}
                date={post.date}
                style={{ marginLeft: '30px' }} // Adjust margin left here
              />
            </div>
          ))}
        </div>
    </div>
  );
}
