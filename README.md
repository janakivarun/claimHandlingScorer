# claimHandlingScorer

Please follow below steps:-

1. npm install
2. cd api
3. npm install
4. cd..
5. cd reactUI
6. npm install

Monogdb set up should be as follows

1. dbname - claims
2. collectionName - claimNotes 
3. document as follows 

{
    "_id" : ObjectId("5fccb4f5ca0c8b2bae2c7a7a"),
    "claimId" : "ABC12345",
    "notes" : [ 
        {
            "topic" : "Initial Contact",
            "note" : [ 
                "Called Claimant and due to her busy schedule request me to reach out to her Tomorrow", 
                "Reached out to Insured and Claimant and got all the info needed."
            ]
        }, 
        {
            "topic" : "Coverage Verification",
            "note" : [ 
                "Coverage is not verified. Seeking additional details", 
                "Reviewed the coverage and is approved"
            ]
        }, 
        {
            "topic" : "Claim Investigation",
            "note" : [ 
                "Investigation completed"
            ]
        }, 
        {
            "topic" : "Litigation Management",
            "note" : [ 
                "Resolution plan is completed. The charges to be paid is estimated as expense on the loss"
            ]
        }, 
        {
            "topic" : "Estimation",
            "note" : [ 
                "Estimate updated to 67897"
            ]
        }, 
        {
            "topic" : "Payments",
            "note" : [ 
                "Electornic Check issued to the claimant 003 : 2837-239203921", 
                "Payment Amount : 99828.00"
            ]
        }, 
        {
            "topic" : "Recovery",
            "note" : [ 
                "There is not potential recovery for this loss"
            ]
        }, 
        {
            "topic" : "Claim Closure",
            "note" : [ 
                "Payment sent and debited. Closed. Contacted the claimant and notified"
            ]
        }
    ]
}