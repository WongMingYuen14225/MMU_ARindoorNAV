document.getElementById('startBtn').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    if (destination === 'cp1' || destination === 'cp2' || destination === 'cp3') {
      alert(`Starting navigation to ${destination}`);
      // Here, you will later add logic to trigger AR navigation in Unity
    } else {
      alert('Please enter a valid destination (cp1, cp2, cp3)');
    }
  });
  