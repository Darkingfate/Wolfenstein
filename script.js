document.addEventListener('DOMContentLoaded', function() {
    const gameModal = document.getElementById('gameModal');
    const closeModal = document.getElementById('closeModal');
    const modalContent = document.getElementById('modalContent');
    const gameButtons = document.querySelectorAll('[data-game]');

    
    const gameDetails = {
        'castle-wolfenstein': {
            title: 'Castle Wolfenstein',
            year: '1981',
            developer: 'Muse Software',
            image: 'images/İmg2.jpg',
            description: `
                        <p class="mb-4">Castle Wolfenstein, Silas Warner tarafından geliştirilen ve Muse Software tarafından 1981 yılında Apple II için yayınlanan bir aksiyon-macera oyunudur. Daha sonra DOS, Atari 8-bit ve Commodore 64 platformlarına da port edilmiştir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Oyun, II. Dünya Savaşı sırasında Nazi kontrolündeki bir kalede geçmektedir. Oyuncu, bir Müttefik casusu olarak Nazi komutanının ofisinde saklanan gizli savaş planlarını çalmak ve kaleden kaçmak zorundadır. Oyuncu, Nazi askerlerinden kaçarak veya onları etkisiz hale getirerek, kalenin odalarını araştırır ve sonunda kaçış yolunu bulur.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Castle Wolfenstein, gizlilik tabanlı bir oyundur. Oyuncular, Nazi muhafızlarından kaçınmalı veya onları silahla etkisiz hale getirmelidir. Oyun, üstten görünümlü bir perspektifle oynanır ve her oda ayrı bir ekranda gösterilir. Oyuncular, sandıkları arayarak silah, cephane ve üniformalar bulabilir. SS subayları özellikle tehlikelidir ve öldürülmeleri zordur.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Castle Wolfenstein, dijitize edilmiş konuşma içeren ilk oyunlardan biridir. Nazi muhafızları "SS!" diye bağırır ve Almanca komutlar verir. Oyun ayrıca yapay zeka ile kontrol edilen düşmanlar ve rastgele oluşturulan oda düzenleri gibi yenilikçi özellikler içeriyordu.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Castle Wolfenstein, gizlilik tabanlı oyun türünün öncülerinden biri olarak kabul edilir. Oyun, daha sonra id Software'in 1992'de geliştirdiği Wolfenstein 3D ile yeniden hayata geçirilecek olan Wolfenstein serisinin temelini attı.</p>
                    `,
            features: ['Gizlilik tabanlı oynanış', '2D grafikler', 'İlk Wolfenstein oyunu']
        },
        'beyond-castle-wolfenstein': {
            title: 'Beyond Castle Wolfenstein',
            year: '1984',
            developer: 'Muse Software',
            image: 'images/İmg3.jpg',
            description: `
                        <p class="mb-4">Beyond Castle Wolfenstein, Silas Warner tarafından geliştirilen ve Muse Software tarafından 1984 yılında yayınlanan, orijinal Castle Wolfenstein'ın devamı niteliğindeki bir aksiyon-macera oyunudur.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Oyun, Hitler'e suikast düzenleme planını konu alır. Oyuncu, bir Müttefik ajanı olarak Hitler'in bulunduğu Nazi sığınağına sızmak ve bir bomba yerleştirmek zorundadır. Görev, gerçek bir tarihsel olaya, 20 Temmuz 1944'teki Valkyrie Operasyonu'na dayanmaktadır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Oyun, selefine benzer şekilde üstten görünümlü bir perspektifle oynanır, ancak birkaç yeni mekanik eklenmiştir. Oyuncular artık muhafızlara rüşvet verebilir, geçiş belgeleri kullanabilir ve bıçak gibi sessiz silahlar kullanabilir. Sığınakta dolaşmak için geçiş kartları gereklidir ve oyuncular muhafızlardan kimlik sorgulamasına tabi tutulabilir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Beyond Castle Wolfenstein, ilk oyuna göre daha gelişmiş gizlilik mekanikleri sunar. Sessiz öldürme, kimlik kontrolü ve geçiş sistemi gibi özellikler, daha sonraki gizlilik oyunlarında standart hale gelecek mekaniklerdir. Oyun ayrıca daha karmaşık bir alarm sistemi içerir - muhafızlar şüphelendiklerinde alarm seviyesini yükseltebilirler.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Beyond Castle Wolfenstein, orijinal oyunun başarısını sürdüremedi ve Muse Software kısa süre sonra kapandı. Bununla birlikte, oyun gizlilik türünün gelişimine katkıda bulundu ve Wolfenstein markasının devam etmesini sağladı. Oyunun Hitler suikastı teması, serinin daha sonraki oyunlarında da tekrar ele alınacaktı.</p>
                    `,
            features: ['Hitler suikastı görevi', 'Gizlilik ve görev tabanlı oynanış', 'Yeni mekanikler']
        },
        'wolfenstein-3d': {
            title: 'Wolfenstein 3D',
            year: '1992',
            developer: 'id Software',
            image: 'images/İmg4.jpg',
            description: `
                        <p class="mb-4">Wolfenstein 3D, id Software tarafından geliştirilen ve 1992 yılında Apogee Software tarafından yayınlanan devrim niteliğindeki bir birinci şahıs nişancı (FPS) oyunudur. Modern FPS türünün öncüsü olarak kabul edilir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Oyun, Amerikalı-Polonyalı asker William "B.J." Blazkowicz'in hikayesini anlatır. B.J., Nazi kontrolündeki Castle Wolfenstein'da tutuklu olarak başlar ve kaçmaya çalışır. Altı bölümden oluşan oyun, B.J.'nin kaleden kaçışını, Nazi bilim adamı Dr. Schabbs'ın mutant ordusunu yok etmesini ve sonunda Adolf Hitler ile yüzleşmesini konu alır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Wolfenstein 3D, hızlı tempolu bir FPS oyunudur. Oyuncular, labirent benzeri seviyelerde Nazi askerleri, köpekler ve diğer düşmanlarla savaşırken gizli odaları keşfeder, hazineler toplar ve seviye sonundaki patronlarla yüzleşir. Oyun, o dönem için yenilikçi olan pürüzsüz 3D görüntüleme teknolojisi kullanır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Wolfenstein 3D, FPS türünün temel taşlarını oluşturdu. Oyun, akıcı 3D grafikleri, hızlı tempolu aksiyon oynanışı ve şiddet içeriği ile dikkat çekti. Oyun, id Software'in daha sonra Doom ile mükemmelleştireceği ray-casting tekniğini kullanıyordu. Ayrıca, oyun içi müzik ve ses efektleri de dönemine göre etkileyiciydi.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein 3D, video oyun tarihinin en etkili oyunlarından biri olarak kabul edilir. Oyun, FPS türünün popülerleşmesine öncülük etti ve id Software'i sektörün önde gelen geliştiricilerinden biri haline getirdi. Oyunun başarısı, Doom, Quake ve diğer birçok FPS oyununun yolunu açtı ve B.J. Blazkowicz karakteri, oyun dünyasının ikonik karakterlerinden biri haline geldi.</p>
                    `,
            features: ['FPS türünün öncüsü', 'Ray-casting grafik motoru', 'B.J. Blazkowicz karakteri']
        },
        'spear-of-destiny': {
            title: 'Spear of Destiny',
            year: '1992',
            developer: 'id Software',
            image: 'images/İmg5.jpg',
            description: `
                        <p class="mb-4">Spear of Destiny, id Software tarafından geliştirilen ve FormGen tarafından 1992 yılında yayınlanan, Wolfenstein 3D'nin ticari bir yan ürünüdür. Oyun, Wolfenstein 3D'nin öncesinde geçen bir hikaye sunar.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Oyun, B.J. Blazkowicz'in Kader Mızrağı'nı (Longinus'un Mızrağı olarak da bilinir) ele geçirmek için verdiği mücadeleyi anlatır. Efsaneye göre, bu mızrak İsa'nın yanını delen Roma askerinin mızrağıdır ve sahibine yenilmezlik gücü verir. Naziler bu güçlü eseri ele geçirmiştir ve B.J., onu geri almakla görevlendirilir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Spear of Destiny, Wolfenstein 3D ile aynı oyun motorunu ve mekaniklerini kullanır. Oyun, tek bir uzun bölümden oluşur ve oyuncular, Nazi kalelerinden geçerek ilerler, düşmanlarla savaşır ve sonunda Kader Mızrağı'nı koruyan doğaüstü varlıkla yüzleşir. Oyun, Wolfenstein 3D'den daha zor olarak tasarlanmıştır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Spear of Destiny, Wolfenstein 3D'nin oynanışına büyük yenilikler getirmese de, serinin doğaüstü ve okült temalarını daha fazla vurgulamıştır. Oyunun final patronu, şeytani bir varlıktır ve bu, serinin daha sonraki oyunlarında daha fazla keşfedilecek olan Nazi okültizmi temasının başlangıcını temsil eder.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Spear of Destiny, Wolfenstein 3D kadar etkili olmasa da, serinin devamı için önemli bir yapı taşı olmuştur. Oyun, Nazi Almanyası'nın okült ve doğaüstü güçlerle olan bağlantısı temasını geliştirmiş ve bu tema, özellikle Return to Castle Wolfenstein ve sonraki oyunlarda önemli bir rol oynamıştır. Ayrıca, Kader Mızrağı, serinin mitolojisinde önemli bir eser haline gelmiştir.</p>
                    `,
            features: ['Wolfenstein 3D yan oyunu', 'Kader Mızrağı efsanesi', 'Daha zor seviyeler']
        },
        'return-to-castle-wolfenstein': {
            title: 'Return to Castle Wolfenstein',
            year: '2001',
            developer: 'Gray Matter Interactive & Nerve Software',
            image: 'images/img6.jpg',
            description: `
                        <p class="mb-4">Return to Castle Wolfenstein, Gray Matter Interactive (tek oyunculu) ve Nerve Software (çok oyunculu) tarafından geliştirilen ve Activision tarafından 2001 yılında yayınlanan bir birinci şahıs nişancı oyunudur. Oyun, Wolfenstein serisinin bir yeniden başlatması olarak tasarlanmıştır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Oyun, II. Dünya Savaşı sırasında geçer ve B.J. Blazkowicz'in Müttefik Kuvvetler için çalışarak Nazi Almanyası'nın doğaüstü ve okült faaliyetlerini araştırma görevini konu alır. Hikaye, SS Paranormal Division'ın antik bir Sakson büyücü kralı olan Heinrich I'i diriltme çabalarını içerir. B.J., bu planı durdurmak ve Nazi liderlerini ortadan kaldırmak için mücadele eder.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Return to Castle Wolfenstein, klasik FPS oynanışını modern (2001 için) grafik ve fizik motoruyla birleştirir. Oyun, gizlilik unsurları, çeşitli silahlar ve düşman tipleri sunar. Oyuncular, Nazi askerleri, zombiler ve diğer doğaüstü varlıklarla savaşırken çeşitli ortamlarda ilerler. Oyunun çok oyunculu modu, sınıf tabanlı takım oynanışı ile büyük beğeni toplamıştır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Return to Castle Wolfenstein, id Tech 3 (Quake III Arena) motorunu kullanarak etkileyici grafikler ve fizik sunmuştur. Oyun, Nazi Almanyası'nın okült araştırmalarını daha derinlemesine keşfederek serinin mitolojisini genişletmiştir. Çok oyunculu mod, Eksen ve Müttefik kuvvetleri arasındaki hedef tabanlı savaşları içeren "Wolfenstein: Enemy Territory" adlı bağımsız bir oyuna dönüşecek kadar popüler olmuştur.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Return to Castle Wolfenstein, hem tek oyunculu hikayesi hem de yenilikçi çok oyunculu modu ile büyük beğeni toplamıştır. Oyun, Wolfenstein serisini modern oyun dünyasına başarıyla taşımış ve serinin Nazi okültizmi ve doğaüstü temalarını daha da geliştirmiştir. Oyunun başarısı, daha sonraki Wolfenstein oyunları için zemin hazırlamış ve seriyi 21. yüzyılda da devam eden bir franchise haline getirmiştir.</p>
                    `,
            features: ['Yeniden başlatma', 'Okült temalar', 'Çok oyunculu mod']
        },
        'wolfenstein-enemy-territory': {
            title: 'Wolfenstein: Enemy Territory',
            year: '2003',
            developer: 'Splash Damage',
            image: 'images/img7.jpg',
            description: `
                        <p class="mb-4">Wolfenstein: Enemy Territory, Splash Damage tarafından geliştirilen ve Activision tarafından 2003 yılında ücretsiz olarak yayınlanan çok oyunculu bir birinci şahıs nişancı oyunudur. Oyun, başlangıçta Return to Castle Wolfenstein'ın bir genişleme paketi olarak planlanmış, ancak daha sonra bağımsız bir ücretsiz oyun olarak yayınlanmıştır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Enemy Territory, tamamen çok oyunculu odaklı bir oyundur ve tek oyunculu bir kampanya içermez. Oyun, Müttefik ve Eksen kuvvetleri arasındaki savaşları konu alır. Oyuncular, beş farklı sınıftan birini seçebilir: Asker, Medik, Mühendis, Keşif ve Sahra Subayı. Her sınıfın kendine özgü yetenekleri ve görevleri vardır.</p>
                        
                        <p class="mb-4">Oyun, hedef tabanlı haritalar sunar ve takımlar, çeşitli görevleri tamamlamak için birlikte çalışmalıdır. Görevler arasında köprü inşa etmek, duvarları patlatmak, belgeleri çalmak veya belirli konumları ele geçirmek gibi çeşitli hedefler bulunur. Oyuncular, görevleri tamamlayarak ve düşmanları öldürerek deneyim puanı kazanır ve sınıflarında ilerleyerek yeni yetenekler açabilirler.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Enemy Territory, sınıf tabanlı oynanışı ve deneyim sistemi ile döneminin çok oyunculu FPS oyunları arasında öne çıkmıştır. Oyun, takım çalışmasını teşvik eden hedef tabanlı görevler sunar ve her sınıfın takıma katkıda bulunabileceği bir sistem içerir. Ayrıca, oyunun ücretsiz olarak dağıtılması, geniş bir oyuncu kitlesine ulaşmasını sağlamıştır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein: Enemy Territory, çıkışından yıllar sonra bile aktif bir oyuncu tabanına sahip olmuş ve çok oyunculu FPS türünün klasiklerinden biri haline gelmiştir. Oyunun sınıf sistemi ve hedef tabanlı oynanışı, daha sonraki birçok oyunu etkilemiştir. Oyun, açık kaynak kodlu olarak yayınlanmış ve bu sayede modlar ve özel sunucular aracılığıyla genişletilmiştir. Enemy Territory, Wolfenstein serisinin çok oyunculu yönünü temsil eden önemli bir yapım olarak kabul edilir.</p>
                    `,
            features: ['Ücretsiz FPS', 'Sınıf tabanlı oynanış', 'Takım savaşı']
        },
        'wolfenstein-2009': {
            title: 'Wolfenstein',
            year: '2009',
            developer: 'Raven Software',
            image: 'images/İmg8.jpg',
            description: `
                        <p class="mb-4">Wolfenstein (2009), Raven Software tarafından geliştirilen ve Activision tarafından yayınlanan bir birinci şahıs nişancı oyunudur. Oyun, Return to Castle Wolfenstein'ın devamı niteliğindedir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Oyun, B.J. Blazkowicz'in Nazi Almanyası'nın gizemli "Perde" (Veil) enerjisini kullanma çabalarını araştırdığı bir görevi konu alır. B.J., Nazi işgali altındaki Isenstadt şehrine gönderilir ve burada yerel direniş gruplarıyla işbirliği yaparak Nazilerin doğaüstü planlarını engellemeye çalışır. Hikaye, Nazilerin antik bir boyuttan güç çekme ve bu gücü silah haline getirme çabalarını içerir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Wolfenstein, geleneksel FPS oynanışını açık dünya unsurlarıyla birleştirir. Oyuncular, merkezi bir şehir alanı olan Isenstadt'ta serbestçe dolaşabilir ve buradan çeşitli görev bölgelerine erişebilirler. Oyun, klasik silahların yanı sıra, Perde enerjisiyle güçlendirilmiş silahlar da sunar.</p>
                        
                        <p class="mb-4">Oyunun en önemli özelliklerinden biri, B.J.'nin "Perde Madalyonu" aracılığıyla kazandığı doğaüstü yeteneklerdir. Bu yetenekler arasında Perde dünyasını görebilme, zaman yavaşlatma, kalkanlar oluşturma ve güçlendirilmiş saldırılar yapma gibi güçler bulunur. Oyuncular, bu güçleri geliştirmek için altın ve diğer kaynakları toplayabilirler.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Wolfenstein (2009), seriye yarı-açık dünya yapısı ve RPG unsurları getirmiştir. Perde yetenekleri, oyuna taktiksel derinlik katmış ve oyunculara çeşitli yaklaşım seçenekleri sunmuştur. Oyun ayrıca, id Tech 4 motorunu kullanarak etkileyici grafikler ve fizik efektleri sunmuştur.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein (2009), karışık eleştiriler almış ve ticari olarak beklentileri karşılayamamıştır. Bununla birlikte, oyun serinin doğaüstü ve okült temalarını daha da geliştirmiş ve daha sonraki Wolfenstein oyunları için bazı kavramsal temeller atmıştır. Oyunun ardından, Bethesda Softworks Wolfenstein markasını satın almış ve MachineGames'in geliştirdiği yeni bir Wolfenstein serisinin yolunu açmıştır.</p>
                    `,
            features: ['Açık dünya', 'Doğaüstü güçler', 'Perde enerjisi']
        },
        'wolfenstein-the-new-order': {
            title: 'Wolfenstein: The New Order',
            year: '2014',
            developer: 'MachineGames',
            image: 'images/img9.jpg',
            description: `
                        <p class="mb-4">Wolfenstein: The New Order, MachineGames tarafından geliştirilen ve Bethesda Softworks tarafından 2014 yılında yayınlanan bir birinci şahıs nişancı oyunudur. Oyun, Wolfenstein serisinin yeniden başlatılması olarak tasarlanmıştır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">The New Order, alternatif bir tarih senaryosunda geçer. 1946'da, B.J. Blazkowicz ve Müttefikler, Nazi Almanyası'nın gizli silah üssüne son bir saldırı düzenler. Saldırı başarısız olur ve B.J. ağır yaralanır, 14 yıl boyunca komada kalır. 1960'ta uyandığında, Naziler II. Dünya Savaşı'nı kazanmış ve dünyayı ele geçirmiştir.</p>
                        
                        <p class="mb-4">B.J., Kreisau Çemberi adlı bir direniş grubuyla birleşir ve Nazi rejimini devirmek için mücadele eder. Hikaye, B.J.'nin kişisel travmaları, sevdikleriyle ilişkileri ve Nazi General Wilhelm "Deathshead" Strasse'ye karşı intikam arayışı etrafında şekillenir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">The New Order, klasik Wolfenstein aksiyon oynanışını modern FPS mekanikleriyle birleştirir. Oyun, yoğun çatışmalar, gizlilik seçenekleri ve hikaye odaklı bir deneyim sunar. Oyuncular, çift silah kullanabilir ve silahları geliştirerek özelleştirebilirler.</p>
                        
                        <p class="mb-4">Oyun, oyuncuların erken bir noktada iki farklı zaman çizelgesinden birini seçmesini sağlayan bir "karar anı" içerir. Bu seçim, bazı karakter etkileşimlerini ve yan görevleri etkiler, ancak ana hikaye büyük ölçüde aynı kalır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">The New Order, Wolfenstein serisine güçlü bir hikaye anlatımı ve karakter gelişimi getirmiştir. Oyun, Nazi Almanyası'nın kazandığı bir dünyayı detaylı bir şekilde tasvir ederek, distopik ve retro-fütüristik bir estetik sunar. Oyun ayrıca, aksiyon ve gizlilik arasında geçiş yapma özgürlüğü vererek oyunculara farklı oynanış stilleri sunar.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein: The New Order, eleştirmenlerden ve oyunculardan büyük beğeni toplamış ve serinin modern yeniden doğuşunu temsil etmiştir. Oyun, güçlü hikaye anlatımı, karakterleri ve alternatif tarih senaryosuyla övgü almıştır. The New Order'ın başarısı, MachineGames'in geliştirdiği yeni Wolfenstein serisinin devam etmesini sağlamış ve Wolfenstein: The Old Blood, Wolfenstein II: The New Colossus ve diğer devam oyunlarının yolunu açmıştır.</p>
                    `,
            features: ['Alternatif tarih', 'Modern FPS', 'Gelişmiş hikaye']
        },
        'wolfenstein-the-old-blood': {
            title: 'Wolfenstein: The Old Blood',
            year: '2015',
            developer: 'MachineGames',
            image: 'images/img10.jpg',
            description: `
                        <p class="mb-4">Wolfenstein: The Old Blood, MachineGames tarafından geliştirilen ve Bethesda Softworks tarafından 2015 yılında yayınlanan bir bağımsız genişleme oyunudur. Oyun, Wolfenstein: The New Order'ın öncesinde geçen bir hikaye sunar.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">The Old Blood, 1946 yılında, The New Order'ın başlangıcından hemen önce geçer. Oyun iki bölüme ayrılmıştır: "Rudi Jäger and the Den of Wolves" ve "Helga Von Schabbs and the Secret of Wulfburg".</p>
                        
                        <p class="mb-4">İlk bölümde, B.J. Blazkowicz ve Ajan One, Nazi General Deathshead'in konumunu içeren bir dosyayı bulmak için Castle Wolfenstein'a sızma görevindedir. İkinci bölümde ise B.J., arkeolog Helga Von Schabbs'ın antik bir güç arayışını durdurmalıdır. Bu arayış, kasabayı zombi benzeri yaratıklarla dolduran tehlikeli bir salgına yol açar.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">The Old Blood, The New Order'ın oynanış mekaniklerini büyük ölçüde korur. Oyuncular, yoğun çatışmalar ve gizlilik seçenekleri arasında seçim yapabilirler. Oyun, boru gibi kullanılabilen yeni bir yakın dövüş silahı sunar ve bu silah tırmanma mekanikleri için de kullanılabilir.</p>
                        
                        <p class="mb-4">Oyun, The New Order'a göre daha doğrusal bir yapıya sahiptir ve daha kompakt seviyeler sunar. Zombi benzeri düşmanların eklenmesi, oyuna yeni bir oynanış katmanı ekler, çünkü bu düşmanlar standart Nazi askerlerinden farklı davranır ve taktikler gerektirir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">The Old Blood, serinin klasik Castle Wolfenstein ortamına ve Nazi okültizmi temalarına geri dönüş yapar. Oyun, The New Order'ın modern oynanışını korurken, serinin köklerine saygı duruşunda bulunur. Zombi benzeri düşmanların eklenmesi, oyuna korku unsurları katar ve oynanış çeşitliliğini artırır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein: The Old Blood, The New Order'ın başarısını sürdürmüş ve serinin hayranlarına ek içerik sunmuştur. Oyun, Wolfenstein serisinin klasik unsurlarını modern oynanışla birleştirerek, hem eski hem de yeni hayranları memnun etmiştir. The Old Blood, The New Order ve The New Colossus arasında bir köprü görevi görerek, MachineGames'in Wolfenstein evrenini genişletmiştir.</p>
                    `,
            features: ['Prequel', 'Okült temalar', 'Zombi düşmanlar']
        },
        'wolfenstein-the-new-colossus': {
            title: 'Wolfenstein II: The New Colossus',
            year: '2017',
            developer: 'MachineGames',
            image: 'images/img11.jpg',
            description: `
                        <p class="mb-4">Wolfenstein II: The New Colossus, MachineGames tarafından geliştirilen ve Bethesda Softworks tarafından 2017 yılında yayınlanan bir birinci şahıs nişancı oyunudur. Oyun, Wolfenstein: The New Order'ın doğrudan devamıdır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">The New Colossus, The New Order'ın hemen ardından, 1961 yılında geçer. Ağır yaralı olan B.J. Blazkowicz, Kreisau Çemberi'nin ele geçirdiği bir Nazi denizaltısında iyileşirken, Frau Engel ve kuvvetleri tarafından saldırıya uğrar. B.J., kaçmayı başarır ve Amerika Birleşik Devletleri'ne gider.</p>
                        
                        <p class="mb-4">Amerika, Nazi işgali altındadır ve B.J., ikinci Amerikan Devrimi'ni başlatmak için çeşitli direniş gruplarıyla işbirliği yapar. Hikaye, B.J.'nin kişisel geçmişini, özellikle istismarcı babasıyla olan ilişkisini derinlemesine inceler ve aynı zamanda hamile eşi Anya ile olan ilişkisini ve yakında baba olacağı gerçeğini ele alır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">The New Colossus, The New Order'ın oynanış temellerini korur ve genişletir. Oyuncular yine aksiyon ve gizlilik arasında seçim yapabilir, çift silah kullanabilir ve silahlarını geliştirebilirler. Oyuna eklenen yeni özellikler arasında, B.J.'nin zayıflamış durumunu yansıtan düşük sağlık limiti (başlangıçta) ve bunu dengelemek için kullanılabilen zırh parçaları bulunur.</p>
                        
                        <p class="mb-4">Oyun ayrıca, oyuncuların farklı oynanış stillerine uygun üç farklı yetenek ağacı sunar. Oyuncular, gizlilik, taktiksel veya saldırgan yaklaşımları destekleyen yetenekler kazanabilirler. Oyuna eklenen yeni silahlar ve düşman tipleri, oynanış çeşitliliğini artırır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">The New Colossus, Nazi işgali altındaki Amerika'yı detaylı bir şekilde tasvir ederek, alternatif tarih senaryosunu genişletir. Oyun, ırkçılık, faşizm ve direniş gibi temaları cesurca ele alır ve bunları B.J.'nin kişisel hikayesiyle ilişkilendirir. Oyun ayrıca, çarpıcı sinematik sahneler ve güçlü karakter gelişimi ile hikaye anlatımına büyük önem verir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein II: The New Colossus, eleştirmenlerden büyük beğeni toplamış ve cesur hikaye anlatımı, karakterleri ve politik temaları ile övgü almıştır. Oyun, 2017 The Game Awards'da "En İyi Aksiyon Oyunu" ödülünü kazanmıştır. The New Colossus, MachineGames'in Wolfenstein serisinin devamı için zemin hazırlamış ve Wolfenstein: Youngblood ve Wolfenstein: Cyberpilot gibi yan oyunların yolunu açmıştır.</p>
                    `,
            features: ['Amerika\'da Nazi işgali', 'Yeni silahlar', 'Gelişmiş karakterler']
        },
        'wolfenstein-youngblood': {
            title: 'Wolfenstein: Youngblood',
            year: '2019',
            developer: 'MachineGames & Arkane Studios',
            image: 'images/img12.jpg',
            description: `
                        <p class="mb-4">Wolfenstein: Youngblood, MachineGames ve Arkane Studios tarafından ortaklaşa geliştirilen ve Bethesda Softworks tarafından 2019 yılında yayınlanan bir spin-off oyunudur. Oyun, Wolfenstein II: The New Colossus'tan sonra geçen bir hikaye sunar.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Youngblood, The New Colossus'tan 19 yıl sonra, 1980'de geçer. Oyuncular, B.J. Blazkowicz'in ikiz kızları Jessie ve Zofia "Jess ve Soph" Blazkowicz olarak oynarlar. B.J. ortadan kaybolmuştur ve ikizler, onu bulmak için Nazi işgali altındaki Paris'e giderler.</p>
                        
                        <p class="mb-4">Paris'te, ikizler Fransız Direniş hareketiyle bağlantı kurar ve babaları hakkında ipuçları ararken Nazi güçlerine karşı savaşırlar. Hikaye, ikizlerin olgunlaşma sürecini ve Nazi rejimine karşı mücadelelerini konu alır.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Youngblood, serinin ilk eş zamanlı kooperatif oyunudur. Oyuncular, ya bir arkadaşlarıyla ya da yapay zeka kontrollü bir partnerle oynayabilirler. Her ikiz, kendi yetenek ağacına ve özelleştirme seçeneklerine sahiptir.</p>
                        
                        <p class="mb-4">Oyun, daha açık bir yapı sunar ve oyuncular, Paris'in çeşitli bölgelerinde görevleri istedikleri sırayla tamamlayabilirler. Oyuna eklenen RPG unsurları arasında, düşman seviye sistemi, ekipman geliştirme ve yetenek puanları bulunur.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Youngblood, Wolfenstein serisine kooperatif oynanış ve daha fazla RPG unsuru getirmiştir. Oyun, 1980'lerin retro estetiğini Nazi distopyasıyla birleştirerek, serinin görsel stilini genişletmiştir. Arkane Studios'un katılımı, seviye tasarımında daha açık uçlu yaklaşımlar ve alternatif yollar sağlamıştır.</p>
                        
                        <p class="mb-4">Oyun ayrıca, "Pep Sinyalleri" adı verilen yeni bir mekanik sunar. Bu sinyaller, oyuncuların birbirlerine çeşitli geçici güçlendirmeler sağlamasına olanak tanır ve kooperatif oynanışı teşvik eder.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein: Youngblood, karışık eleştiriler almıştır. Oyunun kooperatif oynanışı ve aksiyon sahneleri övgü alırken, hikaye anlatımı, karakter gelişimi ve RPG unsurları eleştirilmiştir. Bununla birlikte, oyun Wolfenstein evrenini genişletmiş ve serinin zaman çizelgesini ileriye taşımıştır. Youngblood, MachineGames'in Wolfenstein serisinin bir yan kolu olarak hizmet etmiş ve gelecekteki oyunlar için yeni karakterler ve konseptler tanıtmıştır.</p>
                    `,
            features: ['Kooperatif oynanış', 'İkiz karakterler', 'RPG unsurları']
        },
        'wolfenstein-cyberpilot': {
            title: 'Wolfenstein: Cyberpilot',
            year: '2019',
            developer: 'MachineGames & Arkane Studios',
            image: 'images/img13.jpg',
            description: `
                        <p class="mb-4">Wolfenstein: Cyberpilot, MachineGames ve Arkane Studios tarafından geliştirilen ve Bethesda Softworks tarafından 2019 yılında yayınlanan bir sanal gerçeklik (VR) oyunudur. Oyun, Wolfenstein: Youngblood ile aynı zamanda geçer.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Hikaye</h3>
                        <p class="mb-4">Cyberpilot, Youngblood ile aynı dönemde, 1980'de Nazi işgali altındaki Paris'te geçer. Oyuncular, Fransız direniş hareketi için çalışan bir hacker olarak, Nazi savaş makinelerini hackleyip onları yaratıcılarına karşı kullanırlar.</p>
                        
                        <p class="mb-4">Hikaye, oyuncunun direniş için çalışan bir teknisyen olan Jemma ile işbirliği yaparak, Nazilerin Paris'teki operasyonlarını sabote etme çabalarını konu alır. Oyun, Wolfenstein evreninin daha geniş hikayesine küçük bir katkı sağlar ve Youngblood'un yan hikayesi olarak hizmet eder.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Oynanış</h3>
                        <p class="mb-4">Cyberpilot, tamamen VR için tasarlanmış bir birinci şahıs oyunudur. Oyuncular, üç farklı Nazi savaş makinesini kontrol ederler: Panzerhund (mekanik köpek), Drone ve Zitadelle (dev robot). Her araç, kendine özgü yeteneklere ve silah sistemlerine sahiptir.</p>
                        
                        <p class="mb-4">Oyun, oyuncuların bu araçları kullanarak çeşitli görevleri tamamlamasını gerektirir. Görevler arasında Nazi üslerine saldırmak, belirli hedefleri yok etmek ve direniş operasyonlarını desteklemek bulunur. Oyun ayrıca, araçları tamir etmek ve geliştirmek için basit bulmaca unsurları içerir.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Yenilikçi Özellikler</h3>
                        <p class="mb-4">Cyberpilot, Wolfenstein serisinin ilk VR oyunudur ve oyunculara serinin düşman araçlarını kontrol etme fırsatı sunar. Oyun, VR'ın daldırma özelliklerini kullanarak, oyuncuların Nazi teknolojisinin içinde olma hissini yaşamalarını sağlar. Oyun ayrıca, VR kontrolleri için özel olarak tasarlanmış kokpit arayüzleri ve etkileşim sistemleri sunar.</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-primary">Miras</h3>
                        <p class="mb-4">Wolfenstein: Cyberpilot, eleştirmenlerden karışık yorumlar almıştır. Oyunun VR deneyimi ve görsel kalitesi övgü alırken, kısa süresi, sınırlı içeriği ve tekrarlayan oynanışı eleştirilmiştir. Oyun, Wolfenstein serisinin VR potansiyelini keşfetmek için bir deney olarak görülmüş, ancak tam bir Wolfenstein deneyimi sunmakta yetersiz kalmıştır. Bununla birlikte, Cyberpilot, serinin farklı oyun türlerine ve platformlara genişleme çabalarının bir parçası olarak hizmet etmiştir.</p>
                    `,
            features: ['VR deneyimi', 'Hackleme', 'Fütüristik savaş makineleri']
        }
    };

    
    gameButtons.forEach(button => {
        button.addEventListener('click', function () {
            const gameId = this.getAttribute('data-game');
            const game = gameDetails[gameId];

            if (game) {
                let content = `
                <div class="modal-inner-content">
                    <img src="${game.image}" alt="${game.title}" class="modal-game-img">
                    <h2 class="modal-game-title">${game.title}</h2>
                    <div class="modal-game-meta">
                        <span class="modal-game-year">${game.year}</span> |
                        <span class="modal-game-dev">${game.developer}</span>
                    </div>
                    <div class="modal-game-features">
                        ${game.features.map(feature => `<span class="modal-game-feature">${feature}</span>`).join(' ')}
                    </div>
                    <div class="modal-game-desc">${game.description}</div>
                </div>`;
                modalContent.innerHTML = content;
                gameModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                modalContent.innerHTML = `<div class="modal-inner-content">Bu oyun için detay bulunamadı.</div>`;
                gameModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    
    closeModal.addEventListener('click', function() {
        gameModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    
    gameModal.addEventListener('click', function(e) {
        if (e.target === gameModal) {
            gameModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && gameModal.classList.contains('active')) {
            gameModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 