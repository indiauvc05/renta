import React, { useState } from 'react';
import { useHotelStore } from '../../store/hotelStore';
import { Search, Calendar, Users } from 'lucide-react';

const HotelSearch: React.FC = () => {
  const { searchHotels, isLoading } = useHotelStore();
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkin && checkout) {
      searchHotels(
        new Date(checkin),
        new Date(checkout),
        -2140479, // Amsterdam city ID
        {
          number_of_adults: adults,
          number_of_rooms: rooms
        }
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
              Check-in Date
            </label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                id="checkin"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
              Check-out Date
            </label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                id="checkout"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
              Adults
            </label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} Adult{num !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
              Rooms
            </label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                id="rooms"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} Room{num !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? 'Searching...' : 'Search Hotels'}
        </button>
      </form>
    </div>
  );
};