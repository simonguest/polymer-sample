## Demo Script

1. defaultState="WA"
2. WebStorm code completion
3. selectText = "状態を選択してください"
4. removeSelectValue = "false"
5. Add id="states" and
<script>
    var states = document.getElementById('states');
    states.addEventListener('stateChanged', function(e) {
        console.log('state was changed to '+ e.detail.state);
    });
</script>

https://github.com/simonguest/polymer-sample

## Do you know JavaScript/NodeJS/AngularJS?
## We are hiring!!! Email: simon.guest@concur.com
