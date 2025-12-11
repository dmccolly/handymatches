// GalleryPage Component
        function GalleryPage({ onNavigate }) {
            const gallery = [
                { id: 1, title: 'Garden cleanup for Mrs. Davis', image: '🌳' },
                { id: 2, title: 'Fix leaky faucet', image: '🔧' },
                { id: 3, title: 'Painting the fence', image: '🎨' },
                { id: 4, title: 'Dog walking', image: '🐕' },
                { id: 5, title: 'Installing window', image: '🪟' },
                { id: 6, title: 'Planting flowers', image: '🌸' }
            ];

            return (
                <div className="min-h-screen bg-white">
                    <Navigation onNavigate={onNavigate} currentPage="gallery" />
                    <div className="max-w-7xl mx-auto px-4 py-12">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">Community Project Gallery</h1>
                            <p className="text-xl text-gray-600 mb-8">Celebrating the impact of our volunteers</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {gallery.map((item) => (
                                <div key={item.id} className="aspect-square">
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition">
                                        <div className="absolute inset-0 flex items-center justify-center text-6xl">{item.image}</div>
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                            <p className="text-white text-sm font-medium">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

if (typeof window !== 'undefined') {
    window.GalleryPage = GalleryPage;
}
