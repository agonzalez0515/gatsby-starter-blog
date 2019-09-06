---
date: 2019-09-06T17:20:48.899Z
title: Single Responsibility and Open-Closed Principles
---
### Single Responsibility
It's really easy to violate this principle even when trying to be super aware of it. One example I realized I do a lot that violates this principle is fetching data in a component in React and then using that same component to display it in a specific way. I could abstract getting data to a component that only handles that, and then passes it to any kind of presentational component as props. Then any other component that may also need some or all of that data, can also use it and present it any other way. Say you have a shopping list and you can toggle between layouts, one view can show it as bullet points and another view can show it as cards with an image. All of this data can be fetched once in a parent component, and then passed to these child components, instead of each component fetching the data themselves. 


### Open-Closed
My current iteration of Gilded Rose violates the Open-Closed principle because in order to add the new item to the catalog, I need to modify the current class, I'm not extending it😖 

```ruby
def regular_item(item)
    item.update
end

def backstage_passes(item)
    item.update
end

def aged_brie(item)
    item.update
end
```
Above is what I currently have in my refactored Gilded Rose, and to add a new item I need to add a new method that does the exact same thing as the other 3: 
```
def conjured(item)
   item.update
end
```
🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️
