const rooms = [
  { number: 101, type: 'Single', status: 'Available', guest: '' },
  { number: 102, type: 'Double', status: 'Available', guest: '' },
  { number: 103, type: 'Suite', status: 'Available', guest: '' },
  { number: 104, type: 'Single', status: 'Available', guest: '' },
  { number: 105, type: 'Double', status: 'Available', guest: '' },
];

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  if (id === 'rooms') updateRoomTable();
}

function bookRoom() {
  const name = document.getElementById('guestName').value;
  const type = document.getElementById('roomType').value;
  const checkIn = document.getElementById('checkInDate').value;
  const checkOut = document.getElementById('checkOutDate').value;
  const msg = document.getElementById('bookingMsg');

  const room = rooms.find(r => r.type === type && r.status === 'Available');
  if (room) {
    room.status = 'Booked';
    room.guest = name;
    msg.innerHTML = Room ${room.number} booked for ${name} from ${checkIn} to ${checkOut};
  } else {
    msg.innerHTML = 'No available rooms of selected type.';
  }
}

function checkInGuest() {
  const name = document.getElementById('checkInName').value;
  const guest = rooms.find(r => r.guest === name && r.status === 'Booked');
  const msg = document.getElementById('checkInMsg');
  if (guest) {
    guest.status = 'Occupied';
    msg.innerHTML = ${name} checked in to room ${guest.number}.;
  } else {
    msg.innerHTML = 'Booking not found or already checked in.';
  }
}

function checkOutGuest() {
  const name = document.getElementById('checkOutName').value;
  const guest = rooms.find(r => r.guest === name && r.status === 'Occupied');
  const msg = document.getElementById('checkOutMsg');
  if (guest) {
    guest.status = 'Available';
    guest.guest = '';
    msg.innerHTML = ${name} checked out from room ${guest.number}.;
  } else {
    msg.innerHTML = 'Guest not found or already checked out.';
  }
}

function updateRoomTable() {
  const table = document.getElementById('roomTable');
  table.innerHTML = '';
  rooms.forEach(r => {
    table.innerHTML += <tr><td>${r.number}</td><td>${r.type}</td><td>${r.status}</td><td>${r.guest}</td></tr>;
  });
}