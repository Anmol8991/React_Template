export const barChartData = {
    chart: {
        monthly: {
            commitments: 126,
            drawdowns: 87,
            Distribution: 955,
            NAV: 238,
            total: 213,
            series: [
                {
                    name: 'Commitments',
                    data: [45, 52, 68, 84, 103, 112, 126, 70, 73, 96, 44, 45],
                },
                {
                    name: 'Drawdowns',
                    data: [35, 41, 62, 62, 75, 81, 87, 29, 46, 25, 23, 22],
                },
                {
                    name: 'Distribution',
                    data: [89, 32, 90, 11, 40, 37, 70, 45, 99, 74, 97, 41],
                },
                {
                    name: 'NAV',
                    data: [27, 51, 82, 21, 17, 74, 87, 79, 17, 92, 38, 91],
                },
            ],
            range: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Aug',
                'Spe',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        quarterly: {
            commitments: 270,
            drawdowns: 113,
            Distribution: 997,
            NAV: 882,
            total: 383,
            series: [
                {
                    name: 'Commitments',
                    data: [28, 52, 91, 154],
                },
                {
                    name: 'Drawdowns',
                    data: [22, 31, 74, 88],
                },
                {
                    name: 'Distribution',
                    data: [81, 97, 92, 84],
                },
                {
                    name: 'NAV',
                    data: [88, 66, 95, 56],
                },
            ],
            range: ['Q1', 'Q2', 'Q3', 'Q4'],
        },
    },
}
// if we want to stack keep similar groups otherwise if you want different bars keep different groups
export const barChart = {
    chart: {
        monthly: {
            commitments: 126,
            drawdowns: 87,
            Distribution: 955,
            NAV: 238,
            total: 213,
            series: [
                {
                    name: 'Commitments',
                    group: 'budget',
                    data: [45, 52, 68, 84, 103, 112, 126, 70, 73, 96, 44, 45],
                },
                {
                    name: 'Drawdowns',
                    group: 'actual',
                    data: [35, 41, 62, 62, 75, 81, 87, 29, 46, 25, 23, 22],
                },
                {
                    name: 'Distribution',
                    group: 'budget',
                    data: [89, 32, 90, 11, 40, 37, 70, 45, 99, 74, 97, 41],
                },
                {
                    name: 'NAV',
                    group: 'actual',
                    data: [27, 51, 82, 21, 17, 74, 87, 79, 17, 92, 38, 91],
                },
            ],
            range: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Aug',
                'Spe',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        quarterly: {
            commitments: 270,
            drawdowns: 113,
            Distribution: 997,
            NAV: 882,
            total: 383,
            series: [
                {
                    name: 'Commitments',
                    group: 'budget',
                    data: [28, 52, 91, 154],
                },
                {
                    name: 'Drawdowns',
                    group: 'actual',
                    data: [22, 31, 74, 88],
                },
                {
                    name: 'Distribution',
                    group: 'budget',
                    data: [81, 97, 92, 84],
                },
                {
                    name: 'NAV',
                    group: 'actual',
                    data: [88, 66, 95, 56],
                },
            ],
            range: ['Q1', 'Q2', 'Q3', 'Q4'],
        },
    },
}
// export const barChartData3 = {
          
//     series: [
//         {
//             name: 'Commitments',
//             group: 'budget',
//             data: [45, 52, 68, 84, 103, 112, 126, 70, 73, 96, 44, 45],
//         },
//         {
//             name: 'Drawdowns',
//             group: 'actual',
//             data: [35, 41, 62, 62, 75, 81, 87, 29, 46, 25, 23, 22],
//         },
//         {
//             name: 'Distribution',
//             group: 'budget',
//             data: [89, 32, 90, 11, 40, 37, 70, 45, 99, 74, 97, 41],
//         },
//         {
//             name: 'NAV',
//             group: 'actual',
//             data: [27, 51, 82, 21, 17, 74, 87, 79, 17, 92, 38, 91],
//         },
//     ],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 350,
//         stacked: true,
//       },
//       stroke: {
//         width: 1,
//         colors: ['#fff']
//       },
//       dataLabels: {
//         formatter: (val) => {
//           return val
//         }
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false
//         }
//       },
//       xaxis: {
//         categories: [
//             'Jan',
//             'Feb',
//             'Mar',
//             'Apr',
//             'May',
//             'Jun',
//             'Aug',
//             'Spe',
//             'Oct',
//             'Nov',
//             'Dec',
//         ]
//       },
//       fill: {
//         opacity: 1
//       },
//       colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
//       yaxis: {
//         labels: {
//           formatter: (val) => {
//             return val
//           }
//         }
//       },
//       legend: {
//         position: 'top',
//         horizontalAlign: 'left'
//       }
//     },
  
  
//   };


export const clients = [
    {
        clientId: '455',
        organization: {
            name: 'HDFC Bank',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'HDFC Bank'
            )}&radius=50`,
        },
        country: 'Romania',
        subscriptionType: 'Plan-A',
        subDomain: 'Gibson',
        aum: 3000,
        description:
            'Plenty third that shape similar square disappear pot cat surprise face girl higher men ordinary using spring report special here hungry fort additional exist',
    },
    {
        clientId: '326',
        organization: {
            name: 'ICICI Bank',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'ICICI Bank'
            )}&radius=50`,
        },
        country: 'Honduras',
        subscriptionType: 'Plan-C',
        subDomain: 'Fleming',
        aum: 3000,
        description:
            'Wonderful gray beat carry fell married composed mixture kill recently complete golden establish impossible cloud happy few birds regular practice fourth lungs lift book',
    },
    {
        clientId: '905',
        organization: {
            name: 'UTI AMC',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'UTI AMC'
            )}&radius=50`,
        },
        country: 'U.S. Virgin Islands',
        subscriptionType: 'Plan-B',
        subDomain: 'Lane',
        aum: 3000,
        description:
            'Club donkey tune compound afraid pack war perfectly student wheel north pie position stiff large society birthday airplane elephant sheet highest question taught gently',
    },
    {
        clientId: '451',
        organization: {
            name: 'Parag Parikh Group',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'Parag Parikh Group'
            )}&radius=50`,
        },
        country: 'Cape Verde',
        subscriptionType: 'Plan-B',
        subDomain: 'Burgess',
        aum: 3000,
        description:
            'Needed his bridge day parallel another brush stand equally like equator forest jack off refused degree composition cattle three moment principal organization next liquid',
    },
    {
        clientId: '992',
        organization: {
            name: 'Mirar Asset',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'Mirar Asset'
            )}&radius=50`,
        },
        country: 'Martinique',
        subscriptionType: 'Plan-A',
        subDomain: 'Simon',
        aum: 3000,
        description:
            'Father circus from dug current rise break establish sister usual sport tank cloud beneath alive progress factory merely rope watch swung sing former yellow',
    },
    {
        clientId: '936',
        organization: {
            name: 'SBI',

            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'SBI'
            )}&radius=50`,
        },
        country: 'Aruba',
        subscriptionType: 'Plan-C',
        subDomain: 'Gordon',
        aum: 3000,
        description:
            'Slow machine division wing feel mean dangerous river thee too tired spite best blanket choose card mighty dream forgot silk transportation fallen balance shells',
    },
    {
        clientId: '956',
        organization: {
            name: 'Edelweiss Group',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'Edelweiss Group'
            )}&radius=50`,
        },
        country: 'Estonia',
        subscriptionType: 'Plan-C',
        subDomain: 'Rowe',
        aum: 3000,
        description:
            'Taste toy with bit write enemy sing cheese paint ate desert pride load bicycle principle aware task mix unknown call have complex page slope',
    },
    {
        clientId: '315',
        organization: {
            name: 'NAVI Group',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'NAVI Group'
            )}&radius=50`,
        },
        country: 'Afghanistan',
        subscriptionType: 'Plan-A',
        subDomain: 'Chambers',
        aum: 3000,
        description:
            'Discussion bread hot chapter eye trade some manufacturing ask lunch warm construction music sudden door everywhere difficult record space broad arrow rabbit simply complex',
    },
    {
        clientId: '299',
        organization: {
            name: 'Kotak Mahindra Bank',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'Kotak Mahindra Bank'
            )}&radius=50`,
        },
        country: 'Mauritania',
        subscriptionType: 'Plan-A',
        subDomain: 'Buchanan',
        aum: 3000,
        description:
            'Chair damage taken buy gently none scientific special captured or interest poor white with exciting has additional city ruler land forgot harder spoken double',
    },
    {
        clientId: '502',
        organization: {
            name: 'Axis Bank',
            img: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
                'Axis Bank'
            )}&radius=50`,
        },
        country: 'Guadeloupe',
        subscriptionType: 'Plan-B',
        subDomain: 'Kelley',
        aum: 3000,
        description:
            'Curious lion hard gravity stop fight operation win pack easily gently scene feet law circus except whom invented beside pool distance hundred particles diagram',
    },
]

export const clients2 = [
    {
        clientId: '455',
        organizationName: 'HDFC Bank',
        country: 'Romania',
        subscriptionType: 'Plan-A',
        subDomain: 'Gibson',
        aum: 3000,
        description:
            'Plenty third that shape similar square disappear pot cat surprise face girl higher men ordinary using spring report special here hungry fort additional exist',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        panGst: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'HDFC Bank'
        )}&radius=50`]
        },
    {
        clientId: '326',
        organizationName: 'ICICI Bank',
        country: 'Honduras',
        subscriptionType: 'Plan-C',
        subDomain: 'Fleming',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'ICICI Bank'
        )}&radius=50`],
        aum: 3000,
        description:
            'Wonderful gray beat carry fell married composed mixture kill recently complete golden establish impossible cloud happy few birds regular practice fourth lungs lift book',
    },
    {
        clientId: '905',
        organizationName: 'UTI AMC',
        country: 'U.S. Virgin Islands',
        subscriptionType: 'Plan-B',
        subDomain: 'Lane',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'UTI AMC'
        )}&radius=50`],
        aum: 3000,
        description:
            'Club donkey tune compound afraid pack war perfectly student wheel north pie position stiff large society birthday airplane elephant sheet highest question taught gently',
    },
    {
        clientId: '451',
        organizationName: 'Parag Parikh Group',
        country: 'Cape Verde',
        subscriptionType: 'Plan-B',
        subDomain: 'Burgess',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'Parag Parikh Group'
        )}&radius=50`],
        aum: 3000,
        description:
            'Needed his bridge day parallel another brush stand equally like equator forest jack off refused degree composition cattle three moment principal organization next liquid',
    },
    {
        clientId: '992',
        organizationName: 'Mirar Asset',
        country: 'Martinique',
        subscriptionType: 'Plan-A',
        subDomain: 'Simon',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'Mirar Asset'
        )}&radius=50`],
        aum: 3000,
        description:
            'Father circus from dug current rise break establish sister usual sport tank cloud beneath alive progress factory merely rope watch swung sing former yellow',
    },
    {
        clientId: '936',
        organizationName:  'SBI',
        country: 'Aruba',
        subscriptionType: 'Plan-C',
        subDomain: 'Gordon',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'SBI'
        )}&radius=50`],
        aum: 3000,
        description:
            'Slow machine division wing feel mean dangerous river thee too tired spite best blanket choose card mighty dream forgot silk transportation fallen balance shells',
    },
    {
        clientId: '956',
        organizationName: 'Edelweiss Group',
        country: 'Estonia',
        subscriptionType: 'Plan-C',
        subDomain: 'Rowe',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'Edelweiss Group'
        )}&radius=50`],
        aum: 3000,
        description:
            'Taste toy with bit write enemy sing cheese paint ate desert pride load bicycle principle aware task mix unknown call have complex page slope',
    },
    {
        clientId: '315',
        organizationName: 'NAVI Group',
        country: 'Afghanistan',
        subscriptionType: 'Plan-A',
        subDomain: 'Chambers',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'NAVI Group'
        )}&radius=50`],
        aum: 3000,
        description:
            'Discussion bread hot chapter eye trade some manufacturing ask lunch warm construction music sudden door everywhere difficult record space broad arrow rabbit simply complex',
    },
    {
        clientId: '299',
        organizationName: 'Kotak Mahindra Bank',
        country: 'Mauritania',
        subscriptionType: 'Plan-A',
        subDomain: 'Buchanan',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'Kotak Mahindra Bank'
        )}&radius=50`],
        aum: 3000,
        description:
            'Chair damage taken buy gently none scientific special captured or interest poor white with exciting has additional city ruler land forgot harder spoken double',
    },
    {
        clientId: '502',
        organizationName: 'Axis Bank',
        country: 'Guadeloupe',
        subscriptionType: 'Plan-B',
        subDomain: 'Kelley',
        panGst: '',
        adminName:"John Doe",
        designation: "Manager",
        adminEmail: "johndoe@example.com",
        contactName: 'John Grey',
        contactPhone: '+1 732 533 6549',
        contactEmail: 'johngrey@example.com',
        referredBy: 'John Doe',
        img: '',
        imgList: [`https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            'Axis Bank'
        )}&radius=50`],
        aum: 3000,
        description:
            'Curious lion hard gravity stop fight operation win pack easily gently scene feet law circus except whom invented beside pool distance hundred particles diagram',
    },
]
export const notices = [
    {
        id: 'FA-2023-24-A',
        noticeType: 'Drawdown',
        status: 'Inprogress',
        amount: '71.4949M',
        creationDate: '4/2/2117',
        attachment: '',
    },
    {
        id: 'FA-2023-82-A',
        noticeType: 'Distribution',
        status: 'Inprogress',
        amount: '45.3051M',
        creationDate: '12/26/2040',
        attachment: '',
    },
    {
        id: 'FA-2023-96-A',
        noticeType: 'Distribution',
        status: 'Finished',
        amount: '64.8627M',
        creationDate: '11/10/2115',
        attachment: '',
    },
    {
        id: 'FA-2023-70-A',
        noticeType: 'Drawdown',
        status: 'Closed',
        amount: '70.9979M',
        creationDate: '9/30/2060',
        attachment: '',
    },
    {
        id: 'FA-2023-95-A',
        noticeType: 'Distribution',
        status: 'Inprogress',
        amount: '56.0747M',
        creationDate: '12/1/2023',
        attachment: '',
    },
    {
        id: 'FA-2023-73-A',
        noticeType: 'Drawdown',
        status: 'Closed',
        amount: '96.1508M',
        creationDate: '12/6/2117',
        attachment: '',
    },
    {
        id: 'FA-2023-51-A',
        noticeType: 'Distribution',
        status: 'Finished',
        amount: '44.2254M',
        creationDate: '9/7/2096',
        attachment: '',
    },
    {
        id: 'FA-2023-14-A',
        noticeType: 'Distribution',
        status: 'Closed',
        amount: '54.5379M',
        creationDate: '4/19/2043',
        attachment: '',
    },
    {
        id: 'FA-2023-50-A',
        noticeType: 'Drawdown',
        status: 'Inprogress',
        amount: '96.9816M',
        creationDate: '10/27/2059',
        attachment: '',
    },
    {
        id: 'FA-2023-26-A',
        noticeType: 'Drawdown',
        status: 'Finished',
        amount: '86.3208M',
        creationDate: '11/3/2122',
        attachment: '',
    },
]

export const usersData = [
    {
        id: 'U-23-FP-869',
        name: 'Etta Oliver',
        email: 'zebe@ki.ga',
        role: 'ADMIN',
        status: 'ACTIVE',
    },
    {
        id: 'U-23-FP-358',
        name: 'Clarence Potter',
        email: 'ji@femu.ck',
        role: 'INITIATOR',
        status: 'ACTIVE',
    },
    {
        id: 'U-23-FP-327',
        name: 'Emilie Summers',
        email: 'uku@otbuuwe.ad',
        role: 'VIEWER',
        status: 'INACTIVE',
    },
    {
        id: 'U-23-FP-390',
        name: 'Alta Frazier',
        email: 'sozcu@zirucrez.ae',
        role: 'VIEWER',
        status: 'ACTIVE',
    },
    {
        id: 'U-23-FP-790',
        name: 'Dorothy Owens',
        email: 'bar@zelsun.tw',
        role: 'APPROVER',
        status: 'INACTIVE',
    },
    {
        id: 'U-23-FP-884',
        name: 'Flora Hunter',
        email: 'da@eda.tg',
        role: 'ADMIN',
        status: 'ACTIVE',
    },
    {
        id: 'U-23-FP-367',
        name: 'Grace Allison',
        email: 'wiltucker@seuz.ua',
        role: 'VIEWER',
        status: 'ACTIVE',
    },
    {
        id: 'U-23-FP-567',
        name: 'Larry Burgess',
        email: 'heugola@bewasmab.lb',
        role: 'APPROVER',
        status: 'ACTIVE',
    },
    {
        id: 'U-23-FP-912',
        name: 'Rebecca Gardner',
        email: 'ufa@ehcupur.nz',
        role: 'INITIATOR',
        status: 'INACTIVE',
    },
    {
        id: 'U-23-FP-382',
        name: 'Brent Fowler',
        email: 'nekjebin@faforupim.by',
        role: 'VIEWER',
        status: 'ACTIVE',
    },
]

export const roles = [
    {
        id: 1,
        role: 'Manager',
    },
    {
        id: 2,
        role: 'INITIATOR',
    },
    {
        id: 3,
        role: 'APPROVER',
    },
    {
        id: 4,
        role: 'INVESTOR',
    },
]

export const allFunds = [
    {
        fundName: 'Fee Basis 1',
        legalEntityName: 'Vera Hines',
        startDate: '4/28/2064',
        endDate: '12/8/2023',
        fundLife: 12,
        launchDate: '1/14/2045',
        fundSize: 84.25,
        type: 'computed amount'
    },
    {
        fundName: 'Fee Basis 2',
        legalEntityName: 'Nicholas Colon',
        startDate: '10/20/2063',
        endDate: '11/6/2070',
        fundLife: 12,
        launchDate: '1/20/2048',
        fundSize: 68.31,
        type: 'commitment'
    },
    {
        fundName: 'Fee Basis 3',
        legalEntityName: 'Gregory Rowe',
        startDate: '10/4/2113',
        endDate: '1/5/2092',
        fundLife: 7,
        launchDate: '8/12/2098',
        fundSize: 29.37,
        type: 'undrawn commitment'
    },
    {
        fundName: 'Fee Basis 4',
        legalEntityName: 'Betty West',
        startDate: '3/5/2064',
        endDate: '3/1/2121',
        fundLife: 6,
        launchDate: '4/21/2094',
        fundSize: 15.98,
        type: 'undrawn commitment'

    },
    {
        fundName: 'Fee Basis 5',
        legalEntityName: 'Olive Lloyd',
        startDate: '3/28/2036',
        endDate: '12/17/2098',
        fundLife: 9,
        launchDate: '2/20/2024',
        fundSize: 64.44,
        type: 'undrawn commitment'
    },
]

export const feeFrequencyData = [
    { type: 'yearly' },
    { type: 'halfYearly'},
    { type: 'quarterly'},
    { type: 'monthly' },
]

export const calendarTypeData = [
    { type: 360 },
    { type: 365 },
    { type: 365 },
    { type: 360  },
    { type: 360  },
]

export const equalizationData = [
    { equalizationBasis: 'annual', equalisationCalenderDays: 360},
    { equalizationBasis: 'quarterly', equalisationCalenderDays: 365},
    { equalizationBasis: 'halfYearly', equalisationCalenderDays: 365},
    { equalizationBasis: 'irr', equalisationCalenderDays: 360},
    { equalizationBasis: 'simpleInterest' , equalisationCalenderDays: 360},
]

export const countriesData = [
    { country: 'India', countryId: 'IN'},
    { country: 'USA', countryId: 'USA'},
    { country: 'United Kingdom', countryId: 'UK'},
    { country: 'Iran', countryId: 'IR'},
    { country: 'Iraq' , countryId: 'IQ'},
]

export const currenciesData = [
    { name: 'rupees', code: 'code1'},
    { name: 'dollar', code: 'code2'},
    { name: 'pounds', code: 'code3'},
]

export const drawdownBasisData = [
    { name: 'Basis 1', type: 'commitment'},
    { name: 'Basis 2', type: 'undrawnCommitment'},

]

export const instrumentTypeData = [
    { type: 'debt'},
    { type: 'equity' },
    { type: 'preferenceShares' },
    { type: 'loan'},
]

export const accountGroupData = [
    { type: 'debt'},
    { type: 'equity' },
    { type: 'preferenceShares' },
    { type: 'loan'},
]

export const carriedInterestData = [
    { value: 'dealByDeal' },
    { value: 'dealByFundLevel'},
]


export const investors = [
    {
        scheme:"Scheme-713",
        folio:"Folio-95",
        startDate:"4/5/2073",
        endDate:"12/3/2075",
        country:"Guernsey",
        ratio:"68.2151%",
        type:"Current"
    },
    {
        scheme:"Scheme-573",
        folio:"Folio-18",
        startDate:"8/22/2107",
        endDate:"9/29/2117",
        country:"Uzbekistan",
        ratio:"40.7752%",
        type:"Old"
    },
    {
        scheme:"Scheme-666",
        folio:"Folio-17",
        startDate:"9/15/2097",
        endDate:"5/10/2030",
        country:"Bangladesh",
        ratio:"12.1597%",
        type:"Current"
    },
    {
        scheme:"Scheme-863",
        folio:"Folio-10",
        startDate:"4/4/2023",
        endDate:"2/5/2037",
        country:"Ghana",
        ratio:"89.9022%",
        type:"Old"
    },
    {
        scheme:"Scheme-693",
        folio:"Folio-67",
        startDate:"6/7/2082",
        endDate:"7/10/2046",
        country:"Nepal",
        ratio:"58.4151%",
        type:"Old"
    },
    {
        scheme:"Scheme-530",
        folio:"Folio-59",
        startDate:"4/8/2067",
        endDate:"12/14/2045",
        country:"Montenegro",
        ratio:"3.55%",
        type:"Current"
    },

]

export const countryList = [
    {
        label: 'India',
        dialCode: '+91',
        value: 'IN',
    },
    {
        label: 'USA',
        dialCode: '+1',
        value: 'US',
    },
    {
        label: 'Afghanistan',
        dialCode: '+93',
        value: 'AF',
    },
    {
        label: 'Aland Islands',
        dialCode: '+358',
        value: 'AX',
    },
    {
        label: 'Albania',
        dialCode: '+355',
        value: 'AL',
    },
    {
        label: 'Algeria',
        dialCode: '+213',
        value: 'DZ',
    },
    {
        label: 'AmericanSamoa',
        dialCode: '+1684',
        value: 'AS',
    },
    {
        label: 'Andorra',
        dialCode: '+376',
        value: 'AD',
    },
    {
        label: 'Angola',
        dialCode: '+244',
        value: 'AO',
    },
    {
        label: 'Anguilla',
        dialCode: '+1264',
        value: 'AI',
    },
    {
        label: 'Antarctica',
        dialCode: '+672',
        value: 'AQ',
    },
    {
        label: 'Antigua and Barbuda',
        dialCode: '+1268',
        value: 'AG',
    },
    {
        label: 'Argentina',
        dialCode: '+54',
        value: 'AR',
    },
    {
        label: 'Armenia',
        dialCode: '+374',
        value: 'AM',
    },
    {
        label: 'Aruba',
        dialCode: '+297',
        value: 'AW',
    },
    {
        label: 'Australia',
        dialCode: '+61',
        value: 'AU',
    },
    {
        label: 'Austria',
        dialCode: '+43',
        value: 'AT',
    },
    {
        label: 'Azerbaijan',
        dialCode: '+994',
        value: 'AZ',
    },
    {
        label: 'Bahamas',
        dialCode: '+1242',
        value: 'BS',
    },
    {
        label: 'Bahrain',
        dialCode: '+973',
        value: 'BH',
    },
    {
        label: 'Bangladesh',
        dialCode: '+880',
        value: 'BD',
    },
    {
        label: 'Barbados',
        dialCode: '+1246',
        value: 'BB',
    },
    {
        label: 'Belarus',
        dialCode: '+375',
        value: 'BY',
    },
    {
        label: 'Belgium',
        dialCode: '+32',
        value: 'BE',
    },
    {
        label: 'Belize',
        dialCode: '+501',
        value: 'BZ',
    },
    {
        label: 'Benin',
        dialCode: '+229',
        value: 'BJ',
    },
    {
        label: 'Bermuda',
        dialCode: '+1441',
        value: 'BM',
    },
    {
        label: 'Bhutan',
        dialCode: '+975',
        value: 'BT',
    },
    {
        label: 'Bolivia, Plurinational State of',
        dialCode: '+591',
        value: 'BO',
    },
    {
        label: 'Bosnia and Herzegovina',
        dialCode: '+387',
        value: 'BA',
    },
    {
        label: 'Botswana',
        dialCode: '+267',
        value: 'BW',
    },
    {
        label: 'Brazil',
        dialCode: '+55',
        value: 'BR',
    },
    {
        label: 'British Indian Ocean Territory',
        dialCode: '+246',
        value: 'IO',
    },
    {
        label: 'Brunei Darussalam',
        dialCode: '+673',
        value: 'BN',
    },
    {
        label: 'Bulgaria',
        dialCode: '+359',
        value: 'BG',
    },
    {
        label: 'Burkina Faso',
        dialCode: '+226',
        value: 'BF',
    },
    {
        label: 'Burundi',
        dialCode: '+257',
        value: 'BI',
    },
    {
        label: 'Cambodia',
        dialCode: '+855',
        value: 'KH',
    },
    {
        label: 'Cameroon',
        dialCode: '+237',
        value: 'CM',
    },
    {
        label: 'Canada',
        dialCode: '+1',
        value: 'CA',
    },
    {
        label: 'Cape Verde',
        dialCode: '+238',
        value: 'CV',
    },
    {
        label: 'Cayman Islands',
        dialCode: '+ 345',
        value: 'KY',
    },
    {
        label: 'Central African Republic',
        dialCode: '+236',
        value: 'CF',
    },
    {
        label: 'Chad',
        dialCode: '+235',
        value: 'TD',
    },
    {
        label: 'Chile',
        dialCode: '+56',
        value: 'CL',
    },
    {
        label: 'China',
        dialCode: '+86',
        value: 'CN',
    },
    {
        label: 'Christmas Island',
        dialCode: '+61',
        value: 'CX',
    },
    {
        label: 'Cocos (Keeling) Islands',
        dialCode: '+61',
        value: 'CC',
    },
    {
        label: 'Colombia',
        dialCode: '+57',
        value: 'CO',
    },
    {
        label: 'Comoros',
        dialCode: '+269',
        value: 'KM',
    },
    {
        label: 'Congo',
        dialCode: '+242',
        value: 'CG',
    },
    {
        label: 'Congo, The Democratic Republic of the Congo',
        dialCode: '+243',
        value: 'CD',
    },
    {
        label: 'Cook Islands',
        dialCode: '+682',
        value: 'CK',
    },
    {
        label: 'Costa Rica',
        dialCode: '+506',
        value: 'CR',
    },
    {
        label: "Cote d'Ivoire",
        dialCode: '+225',
        value: 'CI',
    },
    {
        label: 'Croatia',
        dialCode: '+385',
        value: 'HR',
    },
    {
        label: 'Cuba',
        dialCode: '+53',
        value: 'CU',
    },
    {
        label: 'Cyprus',
        dialCode: '+357',
        value: 'CY',
    },
    {
        label: 'Czech Republic',
        dialCode: '+420',
        value: 'CZ',
    },
    {
        label: 'Denmark',
        dialCode: '+45',
        value: 'DK',
    },
    {
        label: 'Djibouti',
        dialCode: '+253',
        value: 'DJ',
    },
    {
        label: 'Dominica',
        dialCode: '+1767',
        value: 'DM',
    },
    {
        label: 'Dominican Republic',
        dialCode: '+1849',
        value: 'DO',
    },
    {
        label: 'Ecuador',
        dialCode: '+593',
        value: 'EC',
    },
    {
        label: 'Egypt',
        dialCode: '+20',
        value: 'EG',
    },
    {
        label: 'El Salvador',
        dialCode: '+503',
        value: 'SV',
    },
    {
        label: 'Equatorial Guinea',
        dialCode: '+240',
        value: 'GQ',
    },
    {
        label: 'Eritrea',
        dialCode: '+291',
        value: 'ER',
    },
    {
        label: 'Estonia',
        dialCode: '+372',
        value: 'EE',
    },
    {
        label: 'Ethiopia',
        dialCode: '+251',
        value: 'ET',
    },
    {
        label: 'Falkland Islands (Malvinas)',
        dialCode: '+500',
        value: 'FK',
    },
    {
        label: 'Faroe Islands',
        dialCode: '+298',
        value: 'FO',
    },
    {
        label: 'Fiji',
        dialCode: '+679',
        value: 'FJ',
    },
    {
        label: 'Finland',
        dialCode: '+358',
        value: 'FI',
    },
    {
        label: 'France',
        dialCode: '+33',
        value: 'FR',
    },
    {
        label: 'French Guiana',
        dialCode: '+594',
        value: 'GF',
    },
    {
        label: 'French Polynesia',
        dialCode: '+689',
        value: 'PF',
    },
    {
        label: 'Gabon',
        dialCode: '+241',
        value: 'GA',
    },
    {
        label: 'Gambia',
        dialCode: '+220',
        value: 'GM',
    },
    {
        label: 'Georgia',
        dialCode: '+995',
        value: 'GE',
    },
    {
        label: 'Germany',
        dialCode: '+49',
        value: 'DE',
    },
    {
        label: 'Ghana',
        dialCode: '+233',
        value: 'GH',
    },
    {
        label: 'Gibraltar',
        dialCode: '+350',
        value: 'GI',
    },
    {
        label: 'Greece',
        dialCode: '+30',
        value: 'GR',
    },
    {
        label: 'Greenland',
        dialCode: '+299',
        value: 'GL',
    },
    {
        label: 'Grenada',
        dialCode: '+1473',
        value: 'GD',
    },
    {
        label: 'Guadeloupe',
        dialCode: '+590',
        value: 'GP',
    },
    {
        label: 'Guam',
        dialCode: '+1671',
        value: 'GU',
    },
    {
        label: 'Guatemala',
        dialCode: '+502',
        value: 'GT',
    },
    {
        label: 'Guernsey',
        dialCode: '+44',
        value: 'GG',
    },
    {
        label: 'Guinea',
        dialCode: '+224',
        value: 'GN',
    },
    {
        label: 'Guinea-Bissau',
        dialCode: '+245',
        value: 'GW',
    },
    {
        label: 'Guyana',
        dialCode: '+595',
        value: 'GY',
    },
    {
        label: 'Haiti',
        dialCode: '+509',
        value: 'HT',
    },
    {
        label: 'Holy See (Vatican City State)',
        dialCode: '+379',
        value: 'VA',
    },
    {
        label: 'Honduras',
        dialCode: '+504',
        value: 'HN',
    },
    {
        label: 'Hong Kong',
        dialCode: '+852',
        value: 'HK',
    },
    {
        label: 'Hungary',
        dialCode: '+36',
        value: 'HU',
    },
    {
        label: 'Iceland',
        dialCode: '+354',
        value: 'IS',
    },
    {
        label: 'India',
        dialCode: '+91',
        value: 'IN',
    },
    {
        label: 'Indonesia',
        dialCode: '+62',
        value: 'ID',
    },
    {
        label: 'Iran, Islamic Republic of Persian Gulf',
        dialCode: '+98',
        value: 'IR',
    },
    {
        label: 'Iraq',
        dialCode: '+964',
        value: 'IQ',
    },
    {
        label: 'Ireland',
        dialCode: '+353',
        value: 'IE',
    },
    {
        label: 'Isle of Man',
        dialCode: '+44',
        value: 'IM',
    },
    {
        label: 'Israel',
        dialCode: '+972',
        value: 'IL',
    },
    {
        label: 'Italy',
        dialCode: '+39',
        value: 'IT',
    },
    {
        label: 'Jamaica',
        dialCode: '+1876',
        value: 'JM',
    },
    {
        label: 'Japan',
        dialCode: '+81',
        value: 'JP',
    },
    {
        label: 'Jersey',
        dialCode: '+44',
        value: 'JE',
    },
    {
        label: 'Jordan',
        dialCode: '+962',
        value: 'JO',
    },
    {
        label: 'Kazakhstan',
        dialCode: '+77',
        value: 'KZ',
    },
    {
        label: 'Kenya',
        dialCode: '+254',
        value: 'KE',
    },
    {
        label: 'Kiribati',
        dialCode: '+686',
        value: 'KI',
    },
    {
        label: "Korea, Democratic People's Republic of Korea",
        dialCode: '+850',
        value: 'KP',
    },
    {
        label: 'Korea, Republic of South Korea',
        dialCode: '+82',
        value: 'KR',
    },
    {
        label: 'Kuwait',
        dialCode: '+965',
        value: 'KW',
    },
    {
        label: 'Kyrgyzstan',
        dialCode: '+996',
        value: 'KG',
    },
    {
        label: 'Laos',
        dialCode: '+856',
        value: 'LA',
    },
    {
        label: 'Latvia',
        dialCode: '+371',
        value: 'LV',
    },
    {
        label: 'Lebanon',
        dialCode: '+961',
        value: 'LB',
    },
    {
        label: 'Lesotho',
        dialCode: '+266',
        value: 'LS',
    },
    {
        label: 'Liberia',
        dialCode: '+231',
        value: 'LR',
    },
    {
        label: 'Libyan Arab Jamahiriya',
        dialCode: '+218',
        value: 'LY',
    },
    {
        label: 'Liechtenstein',
        dialCode: '+423',
        value: 'LI',
    },
    {
        label: 'Lithuania',
        dialCode: '+370',
        value: 'LT',
    },
    {
        label: 'Luxembourg',
        dialCode: '+352',
        value: 'LU',
    },
    {
        label: 'Macao',
        dialCode: '+853',
        value: 'MO',
    },
    {
        label: 'Macedonia',
        dialCode: '+389',
        value: 'MK',
    },
    {
        label: 'Madagascar',
        dialCode: '+261',
        value: 'MG',
    },
    {
        label: 'Malawi',
        dialCode: '+265',
        value: 'MW',
    },
    {
        label: 'Malaysia',
        dialCode: '+60',
        value: 'MY',
    },
    {
        label: 'Maldives',
        dialCode: '+960',
        value: 'MV',
    },
    {
        label: 'Mali',
        dialCode: '+223',
        value: 'ML',
    },
    {
        label: 'Malta',
        dialCode: '+356',
        value: 'MT',
    },
    {
        label: 'Marshall Islands',
        dialCode: '+692',
        value: 'MH',
    },
    {
        label: 'Martinique',
        dialCode: '+596',
        value: 'MQ',
    },
    {
        label: 'Mauritania',
        dialCode: '+222',
        value: 'MR',
    },
    {
        label: 'Mauritius',
        dialCode: '+230',
        value: 'MU',
    },
    {
        label: 'Mayotte',
        dialCode: '+262',
        value: 'YT',
    },
    {
        label: 'Mexico',
        dialCode: '+52',
        value: 'MX',
    },
    {
        label: 'Micronesia, Federated States of Micronesia',
        dialCode: '+691',
        value: 'FM',
    },
    {
        label: 'Moldova',
        dialCode: '+373',
        value: 'MD',
    },
    {
        label: 'Monaco',
        dialCode: '+377',
        value: 'MC',
    },
    {
        label: 'Mongolia',
        dialCode: '+976',
        value: 'MN',
    },
    {
        label: 'Montenegro',
        dialCode: '+382',
        value: 'ME',
    },
    {
        label: 'Montserrat',
        dialCode: '+1664',
        value: 'MS',
    },
    {
        label: 'Morocco',
        dialCode: '+212',
        value: 'MA',
    },
    {
        label: 'Mozambique',
        dialCode: '+258',
        value: 'MZ',
    },
    {
        label: 'Myanmar',
        dialCode: '+95',
        value: 'MM',
    },
    {
        label: 'Namibia',
        dialCode: '+264',
        value: 'NA',
    },
    {
        label: 'Nauru',
        dialCode: '+674',
        value: 'NR',
    },
    {
        label: 'Nepal',
        dialCode: '+977',
        value: 'NP',
    },
    {
        label: 'Netherlands',
        dialCode: '+31',
        value: 'NL',
    },
    {
        label: 'Netherlands Antilles',
        dialCode: '+599',
        value: 'AN',
    },
    {
        label: 'New Caledonia',
        dialCode: '+687',
        value: 'NC',
    },
    {
        label: 'New Zealand',
        dialCode: '+64',
        value: 'NZ',
    },
    {
        label: 'Nicaragua',
        dialCode: '+505',
        value: 'NI',
    },
    {
        label: 'Niger',
        dialCode: '+227',
        value: 'NE',
    },
    {
        label: 'Nigeria',
        dialCode: '+234',
        value: 'NG',
    },
    {
        label: 'Niue',
        dialCode: '+683',
        value: 'NU',
    },
    {
        label: 'Norfolk Island',
        dialCode: '+672',
        value: 'NF',
    },
    {
        label: 'Northern Mariana Islands',
        dialCode: '+1670',
        value: 'MP',
    },
    {
        label: 'Norway',
        dialCode: '+47',
        value: 'NO',
    },
    {
        label: 'Oman',
        dialCode: '+968',
        value: 'OM',
    },
    {
        label: 'Pakistan',
        dialCode: '+92',
        value: 'PK',
    },
    {
        label: 'Palau',
        dialCode: '+680',
        value: 'PW',
    },
    {
        label: 'Palestinian Territory, Occupied',
        dialCode: '+970',
        value: 'PS',
    },
    {
        label: 'Panama',
        dialCode: '+507',
        value: 'PA',
    },
    {
        label: 'Papua New Guinea',
        dialCode: '+675',
        value: 'PG',
    },
    {
        label: 'Paraguay',
        dialCode: '+595',
        value: 'PY',
    },
    {
        label: 'Peru',
        dialCode: '+51',
        value: 'PE',
    },
    {
        label: 'Philippines',
        dialCode: '+63',
        value: 'PH',
    },
    {
        label: 'Pitcairn',
        dialCode: '+872',
        value: 'PN',
    },
    {
        label: 'Poland',
        dialCode: '+48',
        value: 'PL',
    },
    {
        label: 'Portugal',
        dialCode: '+351',
        value: 'PT',
    },
    {
        label: 'Puerto Rico',
        dialCode: '+1939',
        value: 'PR',
    },
    {
        label: 'Qatar',
        dialCode: '+974',
        value: 'QA',
    },
    {
        label: 'Romania',
        dialCode: '+40',
        value: 'RO',
    },
    {
        label: 'Russia',
        dialCode: '+7',
        value: 'RU',
    },
    {
        label: 'Rwanda',
        dialCode: '+250',
        value: 'RW',
    },
    {
        label: 'Reunion',
        dialCode: '+262',
        value: 'RE',
    },
    {
        label: 'Saint Barthelemy',
        dialCode: '+590',
        value: 'BL',
    },
    {
        label: 'Saint Helena, Ascension and Tristan Da Cunha',
        dialCode: '+290',
        value: 'SH',
    },
    {
        label: 'Saint Kitts and Nevis',
        dialCode: '+1869',
        value: 'KN',
    },
    {
        label: 'Saint Lucia',
        dialCode: '+1758',
        value: 'LC',
    },
    {
        label: 'Saint Martin',
        dialCode: '+590',
        value: 'MF',
    },
    {
        label: 'Saint Pierre and Miquelon',
        dialCode: '+508',
        value: 'PM',
    },
    {
        label: 'Saint Vincent and the Grenadines',
        dialCode: '+1784',
        value: 'VC',
    },
    {
        label: 'Samoa',
        dialCode: '+685',
        value: 'WS',
    },
    {
        label: 'San Marino',
        dialCode: '+378',
        value: 'SM',
    },
    {
        label: 'Sao Tome and Principe',
        dialCode: '+239',
        value: 'ST',
    },
    {
        label: 'Saudi Arabia',
        dialCode: '+966',
        value: 'SA',
    },
    {
        label: 'Senegal',
        dialCode: '+221',
        value: 'SN',
    },
    {
        label: 'Serbia',
        dialCode: '+381',
        value: 'RS',
    },
    {
        label: 'Seychelles',
        dialCode: '+248',
        value: 'SC',
    },
    {
        label: 'Sierra Leone',
        dialCode: '+232',
        value: 'SL',
    },
    {
        label: 'Singapore',
        dialCode: '+65',
        value: 'SG',
    },
    {
        label: 'Slovakia',
        dialCode: '+421',
        value: 'SK',
    },
    {
        label: 'Slovenia',
        dialCode: '+386',
        value: 'SI',
    },
    {
        label: 'Solomon Islands',
        dialCode: '+677',
        value: 'SB',
    },
    {
        label: 'Somalia',
        dialCode: '+252',
        value: 'SO',
    },
    {
        label: 'South Africa',
        dialCode: '+27',
        value: 'ZA',
    },
    {
        label: 'South Sudan',
        dialCode: '+211',
        value: 'SS',
    },
    {
        label: 'South Georgia and the South Sandwich Islands',
        dialCode: '+500',
        value: 'GS',
    },
    {
        label: 'Spain',
        dialCode: '+34',
        value: 'ES',
    },
    {
        label: 'Sri Lanka',
        dialCode: '+94',
        value: 'LK',
    },
    {
        label: 'Sudan',
        dialCode: '+249',
        value: 'SD',
    },
    {
        label: 'Suriname',
        dialCode: '+597',
        value: 'SR',
    },
    {
        label: 'Svalbard and Jan Mayen',
        dialCode: '+47',
        value: 'SJ',
    },
    {
        label: 'Swaziland',
        dialCode: '+268',
        value: 'SZ',
    },
    {
        label: 'Sweden',
        dialCode: '+46',
        value: 'SE',
    },
    {
        label: 'Switzerland',
        dialCode: '+41',
        value: 'CH',
    },
    {
        label: 'Syrian Arab Republic',
        dialCode: '+963',
        value: 'SY',
    },
    {
        label: 'Taiwan',
        dialCode: '+886',
        value: 'TW',
    },
    {
        label: 'Tajikistan',
        dialCode: '+992',
        value: 'TJ',
    },
    {
        label: 'Tanzania, United Republic of Tanzania',
        dialCode: '+255',
        value: 'TZ',
    },
    {
        label: 'Thailand',
        dialCode: '+66',
        value: 'TH',
    },
    {
        label: 'Timor-Leste',
        dialCode: '+670',
        value: 'TL',
    },
    {
        label: 'Togo',
        dialCode: '+228',
        value: 'TG',
    },
    {
        label: 'Tokelau',
        dialCode: '+690',
        value: 'TK',
    },
    {
        label: 'Tonga',
        dialCode: '+676',
        value: 'TO',
    },
    {
        label: 'Trinidad and Tobago',
        dialCode: '+1868',
        value: 'TT',
    },
    {
        label: 'Tunisia',
        dialCode: '+216',
        value: 'TN',
    },
    {
        label: 'Turkey',
        dialCode: '+90',
        value: 'TR',
    },
    {
        label: 'Turkmenistan',
        dialCode: '+993',
        value: 'TM',
    },
    {
        label: 'Turks and Caicos Islands',
        dialCode: '+1649',
        value: 'TC',
    },
    {
        label: 'Tuvalu',
        dialCode: '+688',
        value: 'TV',
    },
    {
        label: 'Uganda',
        dialCode: '+256',
        value: 'UG',
    },
    {
        label: 'Ukraine',
        dialCode: '+380',
        value: 'UA',
    },
    {
        label: 'United Arab Emirates',
        dialCode: '+971',
        value: 'AE',
    },
    {
        label: 'United Kingdom',
        dialCode: '+44',
        value: 'GB',
    },
    {
        label: 'United States',
        dialCode: '+1',
        value: 'US',
    },
    {
        label: 'Uruguay',
        dialCode: '+598',
        value: 'UY',
    },
    {
        label: 'Uzbekistan',
        dialCode: '+998',
        value: 'UZ',
    },
    {
        label: 'Vanuatu',
        dialCode: '+678',
        value: 'VU',
    },
    {
        label: 'Venezuela, Bolivarian Republic of Venezuela',
        dialCode: '+58',
        value: 'VE',
    },
    {
        label: 'Vietnam',
        dialCode: '+84',
        value: 'VN',
    },
    {
        label: 'Virgin Islands, British',
        dialCode: '+1284',
        value: 'VG',
    },
    {
        label: 'Virgin Islands, U.S.',
        dialCode: '+1340',
        value: 'VI',
    },
    {
        label: 'Wallis and Futuna',
        dialCode: '+681',
        value: 'WF',
    },
    {
        label: 'Yemen',
        dialCode: '+967',
        value: 'YE',
    },
    {
        label: 'Zambia',
        dialCode: '+260',
        value: 'ZM',
    },
    {
        label: 'Zimbabwe',
        dialCode: '+263',
        value: 'ZW',
    },
]


// const table = {
//     data: [
//         {
//             fundName: 'Fund 1',
//             legalEntityName: 'Vera Hines',
//             startDate: '4/28/2064',
//             endDate: '12/8/2023',
//             fundLife: '12 Years',
//             launchDate: '1/14/2045',
//             fundSize: '84.25M',
//         },
//         {
//             fundName: 'Fund 2',
//             legalEntityName: 'Nicholas Colon',
//             startDate: '10/20/2063',
//             endDate: '11/6/2070',
//             fundLife: '12 Years',
//             launchDate: '1/20/2048',
//             fundSize: '68.31M',
//         },
//     ],
//     tableData: {
//         pageIndex: 1,
//         pageSize: 10,
//         query: 'search',
//         total: 50,
//     },
// }
