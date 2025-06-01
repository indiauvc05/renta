import React from 'react';
import { Building2, Users, Coffee, Ban } from 'lucide-react';

interface HotelCardProps {
  hotel: any;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={hotel.photos?.[0]?.url || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Building2 className="h-4 w-4 mr-1" />
          <span>{hotel.address?.city || 'Location not available'}</span>
        </div>
        
        <div className="mt-4 space-y-2">
          {hotel.meal_plan === 'breakfast_included' && (
            <div className="flex items-center text-sm text-gray-600">
              <Coffee className="h-4 w-4 mr-1" />
              <span>Breakfast Included</span>
            </div>
          )}
          
          {hotel.cancellation_type === 'free_cancellation' && (
            <div className="flex items-center text-sm text-gray-600">
              <Ban className="h-4 w-4 mr-1" />
              <span>Free Cancellation</span>
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <div className="text-2xl font-bold text-blue-800">
            €{hotel.price_breakdown?.gross_price || 'Price not available'}
          </div>
          <p className="text-sm text-gray-500">per night</p>
        </div>
        
        <button className="mt-4 w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          View Details
        </button>
      </div>
    </div>
  );
};