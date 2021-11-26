const allItemsData = [
    {
        name: 'Authentic Terran Cats',
        price: '500',
        category: 'Live Animals',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false
    },
    {
        name: 'X-KL500 Photon cannon',
        price: '1500',
        category: 'Weapons',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false
    },
    {
        name: 'Pixie dust (reagent)',
        price: '80',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Pixie dust (drug)',
        price: '650',
        category: 'Drugs',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Wormwood',
        price: '52',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Aether cristals',
        price: '12563',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: true   
    },
    {
        name: 'Ancient kelegi Statuette',
        price: '289',
        category: 'Artifacts',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Bone meal',
        price: '34',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Clutch of Ksejik eggs',
        price: '266',
        category: 'Live Animals',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: true    
    },
    {
        name: 'Crate of 12 incendiary flasks',
        price: '231',
        category: 'Weapons',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'HT-1565 Propulsion core',
        price: '465479',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: true   
    },
    {
        name: 'Meteoric iron',
        price: '450',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Remains of Conclave gun',
        price: '9650',
        category: 'Weapons',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Extract of Argellan',
        price: '1206',
        category: 'Drugs',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Diphtenothalo\ncyamphetamine',
        price: '785',
        category: 'Drugs',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Rock Salt',
        price: '461',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Collection of Stryx tablets',
        price: '6680',
        category: 'Artifacts',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: true    
    },
    {
        name: 'Parrot !TERRAN TALKING BIRD!',
        price: '54206',
        category: 'Live Animals',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Red velvet',
        price: '1276',
        category: 'Drugs',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Aetheric fungus',
        price: '523',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: true    
    },
    {
        name: 'GENUINE Yxaran rock',
        price: '54255',
        category: 'Artifacts',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Authentic human radio receptor',
        price: '9624',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Live nava',
        price: '846',
        category: 'Live Animals',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: '10kg ammo crate for KD-500, KD-600 and KD-700 firearms',
        price: '846',
        category: 'Weapons',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Collection of human comic books',
        price: '846',
        category: 'Artifacts',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Eye enhancements',
        price: '1247',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: true    
    },
    {
        name: 'Authentic human lamp',
        price: '9821',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Condensators',
        price: '463',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: true    
    },
    {
        name: 'Mahegi blood',
        price: '1287',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Authentic human sword from terran history',
        price: '8690',
        category: 'Weapons',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },
    {
        name: 'Mnemonic implant',
        price: '6582',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: true    
    },
    {
        name: 'Sumac',
        price: '324',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: true   
    },
    {
        name: 'Neon pink',
        price: '6871',
        category: 'Drugs',
        img: require("../../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false    
    },
    {
        name: 'Aether distillate',
        price: '4357',
        category: 'Reagents',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: true   
    },
    {
        name: 'HTX-6424 propulsion core',
        price: '685740',
        category: 'Technology',
        img: require("../../media/placeholder.jpg"),
        bestSeller: false,
        onSale: false    
    },

];

export default allItemsData;