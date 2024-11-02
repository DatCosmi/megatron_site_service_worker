import React from "react";
import { ArrowRight, Users, Building2, Palmtree } from "lucide-react";
import NavBar from "./components/navBar";

const Home = () => {
  return (
    <div className="font-sans">
      <NavBar />

      <section className="flex justify-between items-center p-8">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Venta y renta de <br />
            <span className="text-blue-500">
              impresoras y multifuncionales
            </span>{" "}
            en Durango
          </h1>
          <p className="text-gray-600 mb-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Register
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="/api/placeholder/400/300"
            alt="Illustration"
            className="w-full"
          />
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Clients</h2>
        <p className="text-gray-600 mb-4">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-center space-x-8">
          {/* Replace these with actual client logos */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-600 mb-8">Who is Nexcent suitable for?</p>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <Users size={48} className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">Membership Organisations</h3>
          </div>
          <div className="text-center">
            <Building2 size={48} className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">National Associations</h3>
          </div>
          <div className="text-center">
            <Palmtree size={48} className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">Clubs And Groups</h3>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center p-8">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Lessons and insights <br />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="text-gray-600 mb-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded">
            Register
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="/api/placeholder/400/300"
            alt="Illustration"
            className="w-full"
          />
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Clients</h2>
        <p className="text-gray-600 mb-4">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-center space-x-8">
          {/* Replace these with actual client logos */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-600 mb-8">Who is Nexcent suitable for?</p>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <Users size={48} className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">Membership Organisations</h3>
          </div>
          <div className="text-center">
            <Building2 size={48} className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">National Associations</h3>
          </div>
          <div className="text-center">
            <Palmtree size={48} className="mx-auto mb-2 text-green-500" />
            <h3 className="font-semibold">Clubs And Groups</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
