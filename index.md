## Google Meet Randomiser

Drag the link below to your bookmarks bar

[Randomise!](javascript:(function()%7Bfunction%20paste(text)%20%7Bdocument.querySelectorAll(%22button%5Bdata-panel-id%5D%22)%5B2%5D.click()%3BsetTimeout(function()%20%7Bdocument.querySelector(%22textarea%22).value%20%3D%20text%3Bvar%20ke%20%3D%20new%20KeyboardEvent('keydown'%2C%20%7Bbubbles%3A%20true%2C%20cancelable%3A%20true%2C%20keyCode%3A%2013%7D)%3Bdocument.querySelector(%22textarea%22).dispatchEvent(ke)%3B%7D%2C500)%7Ddocument.querySelectorAll(%22button%5Bdata-panel-id%5D%22)%5B1%5D.click()%3BsetTimeout(function()%20%7Bvar%20res%20%3D%20%5B...new%20Set(%5B...new%20Set(Array.from(document.querySelectorAll(%22div%5Bdata-self-name%5D%22)).map((node)%20%3D%3E%20node.innerText.trim()))%2Cdocument.querySelectorAll(%22div%5Bdata-participant-id%5D%22)%5B0%5D.innerText.split(%2F%5Cr%3F%5Cn%2F)%5B0%5D.trim()%5D)%5D.filter((x)%20%3D%3E%20x%20!%3D%20%22You%22).map((a)%20%3D%3E%20(%7B%20sort%3A%20Math.random()%2C%20value%3A%20a%20%7D)).sort((a%2C%20b)%20%3D%3E%20a.sort%20-%20b.sort).map((a)%20%3D%3E%20a.value).join(%22%5Cn%22)%3Bpaste(res)%3B%7D%2C%20500)%7D)())

Then in a Google Meet, simply click the bookmark and a randomised participant list will be automatically pasted to chat. This is great for doing **stand-ups and retros** in a random order to keep things fresh.

For large meetings, make sure your layout is *tiled* and you have the maximum of 49 participants visible. This randomiser does not work for meetings with more than 49 people.
