import { ScrollArea } from "../../components/ui/scroll-area";
import prodImg from "../../../../public/ProductImages/BiCycle.jpg";

function page() {
  const product = {
    images: [prodImg, prodImg, prodImg, prodImg],
  };

  return (
    <ScrollArea className="text-white col-span-7 flex">
      <div className=" mt-16 mx-2 ">
        <nav className="border-b py-4">
          <ol className="flex space-x-2 text-sm px-4">
            <li>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Marketplace
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-500">Bicycle</li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-10 p-4">
            <div className="flex flex-col space-y-4">
              <img
                alt="Product Image"
                className="w-24 h-32"
                height="400"
                src="/ProductImages/BiCycle.jpg"
                style={{
                  aspectRatio: "300/400",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Product Image"
                className="w-24 h-32"
                height="400"
                src="/ProductImages/BiCycle.jpg"
                style={{
                  aspectRatio: "300/400",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Product Image"
                className="w-24 h-32"
                height="400"
                src="/ProductImages/BiCycle.jpg"
                style={{
                  aspectRatio: "300/400",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Product Image"
                className="w-24 h-32"
                height="400"
                src="/ProductImages/BiCycle.jpg"
                style={{
                  aspectRatio: "300/400",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <img
              alt="Product Image"
              className="lg:w-[300px] lg:h-[400px]"
              height="400"
              src="/ProductImages/BiCycle.jpg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
          <div className="flex-1 p-4">
            <h1 className="text-2xl font-semibold">
              Jenny’s Closets – The winter top for female, green
            </h1>
            <div className="flex items-center space-x-2 my-4">
              <div className="flex text-yellow-400">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-600">157 Reviews</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-lg text-gray-500 line-through">$99</span>
              <span className="text-sm text-green-600">Save 50% right now</span>
            </div>
            <div className="my-4">
              <h3 className="font-semibold">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Made with full cotton</li>
                <li>Slim fit for any body</li>
                <li>Quality control by JC</li>
              </ul>
            </div>
            <div className="my-4">
              <h3 className="font-semibold">Colors</h3>
              <div className="flex space-x-2">
                <span className="block w-6 h-6 bg-blue-600 rounded-full" />
                <span className="block w-6 h-6 bg-gray-800 rounded-full" />
              </div>
            </div>
            <div className="flex space-x-4 my-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add to cart
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <HeartIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <TruckIcon className="w-4 h-4 mr-2" />
                Free shipping worldwide
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                100% Secured Payment
              </div>
              <div className="flex items-center">
                <UserCheckIcon className="w-4 h-4 mr-2" />
                Made by the Professionals
              </div>
            </div>
          </div>
        </div>
        <div className="border-t p-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <a
                className="text-blue-600 border-b-2 border-blue-600 pb-1"
                href="#"
              >
                Seller Reviews
              </a>
            </div>
            <a className="text-sm text-gray-600 hover:text-gray-900" href="#">
              157 Reviews
            </a>
          </div>
          <div className="space-y-4 my-4">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
              </div>
              <p className="text-sm text-gray-600 ml-2">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                changes.
              </p>
            </div>
            <div className="text-xs text-gray-500">Kristin Watson</div>
            <div className="text-xs text-gray-500">March 14, 2021</div>
          </div>
          <button className="text-sm text-gray-600 hover:text-gray-900">
            LOAD MORE REVIEWS
          </button>
        </div>
      </div>
    </ScrollArea>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UserCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

export default page;
