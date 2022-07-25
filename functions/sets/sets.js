function set() {
    let MySet = [];

    this.has = function (element) {
        return (MySet.indexOf(element) !== -1);
    };

    this.values = function () {
        return MySet;
    }

    this.push = function (element) {
        if (!this.has(element)) {
            MySet.push(element);
            return true;
        }
        return false
    };

    this.pull = function (element) {
        if (this.has(element)) {
            index = MySet.indexOf(element);
            MySet.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function () {
        return MySet.length;
    }
}

module.exports = {
    set
}