<template>
<div style="margin-bottom: 10px">
<q-card class="NS_feed__card">
    <h1 class="text-center">The Neustreet Journal</h1>
    <q-card-section vertical align="center">    
    <q-scroll-area
        :visible="true"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"    
        :style="{
            'height': '690px', 
            'max-width': '700px',
        }"
    >
    <q-virtual-scroll  :items="contentFeed">
        <template v-slot="{ item, index }">
        <q-card :key="index" style="width: 90%; margin-bottom: 36px; border-radius: 6px; border: 1.5px solid #000000">
            <q-card-section class="journal-title text-left" style="padding: 5px">
                    <span style="width: 125px;">🌟 {{item.title}}</span>
                    <span class="text-right" style="padding-right: 5px; float: right; font-family: montserrat-medium; font-size: 21px; width: 150px;">{{item.date}}</span>
            </q-card-section>
            <q-card-section style="padding: 0; border-top: solid 1.5px black" horizontal align="left">
                <img
                :style="{
                    'object-fit': 'scale-down',               
                    'max-width': '192px', 
                    'min-height': '192px', 
                    'border-radius': '0px',
                    'border-right': 'solid 1px black',
                }"
                :src="item.image"
                />
                <q-list style="margin: 0; padding: 0">
                    <q-item style="margin: 0; padding: 0; width: 400px; height: 100%;">
                        <div  class="article-link" style="font-family: montserrat-medium">
                            <p :key="section" v-for="section in item.sections" style="margin: 0; padding: 0; direction: ltr; text-overflow: ellipsis ellipsis;">
                                <b>-</b> {{section}}
                            </p>
                        </div> 
                    </q-item>
                </q-list>
            </q-card-section>
            <!-- <q-card-actions  flat style="background: transparent; padding: 0">
                <q-btn flat class="full-width" style="background: #E60088; color: white; border-radius: 0px 0px 6px 6px" :to="{ path: `/content/${item.id}`}">Read</q-btn> 
            </q-card-actions> -->
        </q-card>
        </template>
    </q-virtual-scroll>
    </q-scroll-area>
    </div>
</q-card-section>
</q-card>    
</template>
<script>

// import { mapState, mapActions } from 'vuex'

export default {
    name: 'ArticleFeed',
    data() {
        return {
            contentFeed: [],
            thumbStyle: {
                right: '5px',
                borderRadius: '10px',
                backgroundColor: '#212121',
                width: '8px'
            },
            barStyle: {
                right: '2px',
                // borderRadius: '14px',
                backgroundColor: '#E0E0E0',
                width: '14px',
                // opacity: 0.5,
                marginTop: '-3.5px',
                marginBottom: '-3.5px',
                paddingTop: '3.5px',
                paddingBottom: '3.5px',
                border: '1px solid #9E9E9E'
            },               

        }
    },
    methods: {
        // ...mapActions('content', ['getPopular']),
        loadArticleList() {
            this.contentFeed = [
                    {
                        'id': 'neustreet-journal-issue-7',
                        'title': 'Issue #7',
                        'date': 'Jul 16, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue7/issue_7_thumb.jpg'),
                        'sections': [
                            "Space Jam Fortnite Skins and NFTs for LeBron James",
                            "LA Dodgers' MLB NFT with Candy Digital",
                            "Jeff Staple's Shoe Rental Business KYX World",
                            "The Record Super Mario 64 Video Game Sale",
                            "ASICS Launches NFTs to Support Digital Artists",
                            "Damien Hirst's 'The Currency' NFT Experiment",
                            "The Euros 2020 and The State of Soccer Cards"
                        ]
                    },
                    {
                        'id': 'neustreet-journal-issue-6',
                        'title': 'Issue #6',
                        'date': 'Jul 9, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue6/issue_6_thumb.jpg'),
                        'sections': [
                            "FTX's Massive Push into Sports Sponsorship",
                            "Nike's Releases for the Tokyo Olympics",
                            "NFT Sales Reach $2.5 Billion in H1 2021",
                            "World's First Metaverse ETF Launched",
                            "Collectech M&A: Goldin Auctions, Certified Collectibles Group",
                            "A Record Breaking $5.9 Million Steph Curry Rookie Card",
                            "NIL and The New Business of College Athletes"
                        ]
                    },
                    {
                        'id': 'neustreet-journal-issue-5',
                        'title': 'Issue #5',
                        'date': 'Jul 2, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue5/issue_5_thumb.jpg'),
                        'sections': [
                            "The Formula One opportunities in trading cards and NFTs",
                            "Reddit launches its own NFT experiment",
                            "Sneaker Con teams up with NTWRK to go virtual",
                            "Pokemon's 25th Anniversary involves new card releases",
                            "Sneaker marketplace Goat is now valued at $3.7 Billion",
                            "The $13 Million Yu-Gi-Oh (almost) record card sale",
                            "What PSA's July 1 partial reopening means for trading cards"
                        ]
                    },
                    {
                        'id': 'neustreet-journal-issue-4',
                        'title': 'Issue #4',
                        'date': 'Jun 25, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue4/issue_4_thumb.jpg'),
                        'sections': [
                            "Punks Comics NFTs showcase a new business model for creative industries.", 
                            "RTFKT's 'Not in Paris' NFT sneaker collaboration with Highsnobiety and SuperRare.",
                            "Online sneaker community SoleSavy raises $12.5 Million Series A Round.",
                            "NFT marketplace Rarible raises $14 Million and announces new partnerships.",
                            "Jay-Z, Dame Dash, and Roc-A-Fella Records tied up in NFT legal battle.",
                            "Topps Q1 2021 financial results paints an optimistic picture for the company.",
                            "Highly sought after Travis Scott Playstation Dunks confirmed to be real."

                        ]
                    },
                    {
                        'id': 'neustreet-journal-issue-3',
                        'title': 'Issue #3',
                        'date': 'Jun 18, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue3/issue_3_thumb.jpg'),
                        'sections': [
                            "Euros 2021 reminds us of the opportunity in undervalued soccer cards.",
                            "ComplexLand shows us what's possible with immersive virtual festivals.",
                            "Off-White and Nike collab on 50 Dunks called 'Dear Summer.'",
                            "French national soccer team launches first NFTs with Sorare.",
                            "CryptoPunk sells for $11.8 Million at Sotheby's Auction.",
                            "Fox Entertainment launches $100 Million NFT fund.",
                            "Mythical Games showcases the future of NFT gaming at E3 2021."
                        ]                        
                    },
                    {
                        'id': 'neustreet-journal-issue-2',
                        'title': 'Issue #2',
                        'date': 'Jun 11, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue2/issue_2_thumb.jpg'),
                        'sections': [
                            "Sneaker Story: Jeff Staple & The Nike Pigeon Dunks",
                            "The Pokémon Company Sold 3.7 Billion Cards Last Year",
                            "New Space Jam Film Brings Footwear and Merchandise",
                            "Stadium Goods + Christie's Create World's Largest Online Sneaker Auction",
                            "Mythical Games Is Latest NFT Company With Massive Fundraise",
                            "Wayne Gretzky Rookie Card Auctioned Off For $3 Million",
                            "What PSA's July 1 partial reopening means for trading cards"
                        ]                        
                    },
                    {
                        'id': 'neustreet-journal-issue-1',
                        'title': 'Issue #1',
                        'date': 'Jun 4, 2021',
                        'image': require('../../assets/neusletter_assets/issues/issue1/issue_1_thumb.jpg'),
                        'sections': [
                            "What We're Buying: The 100-Year-Old Babe Ruth & The Importance of Population Data",
                            "LaMelo Ball Dynamic NFTs Dropping Today!",
                            "Panini and Funko Collaborate on New Funko Pop! Trading Cards",
                            "The Olympics Announces Officially Licensed NFT Pins",
                            "MLB Strikes Deal with Candy Digital",
                            "Mexican Soccer Team Sells Ownership Stake + Accompanying NFT",
                            "What PSA's July 1 partial reopening means for trading cards"
                        ]                        
                    },                            
            ]
        }
    },    
    mounted() {
        this.loadArticleList()
    }  
}
</script>

<style lang="scss" scoped>

div.article-link {
margin-left: 15px; 
padding: 5px 5px .5px 5px;
}

div.article-link > p {
  white-space: nowrap; 
  width: 400px; 
  overflow: hidden;
  text-overflow: ellipsis; 
}

.journal-title {
      font-family: "montserrat-bold";
      font-size: 25px;
      text-transform: capitalize;
      margin-bottom: 0;
      padding-bottom: 0;
}
.twitter-feed {
    width: 50%;
    float: right;
}

</style>