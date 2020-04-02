var aeink = {};
aeink.checkAndNudgePoints = function (image, points) {
    var width = qrcode.width;
    var height = qrcode.height;
    var nudged = true;
    for (var offset = 0; offset < points.length && nudged; offset += 2) {
        var x = Math.floor(points[offset]);
        var y = Math.floor(points[offset + 1]);
        if (x < -1 || x > width || y < -1 || y > height) {
            throw "Error.checkAndNudgePoints "
        }
        nudged = false;
        if (x == -1) {
            points[offset] = 0;
            nudged = true
        } else {
            if (x == width) {
                points[offset] = width - 1;
                nudged = true
            }
        }
        if (y == -1) {
            points[offset + 1] = 0;
            nudged = true
        } else {
            if (y == height) {
                points[offset + 1] = height - 1;
                nudged = true
            }
        }
    }
    nudged = true;
    for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
        var x = Math.floor(points[offset]);
        var y = Math.floor(points[offset + 1]);
        if (x < -1 || x > width || y < -1 || y > height) {
            throw "Error.checkAndNudgePoints "
        }
        nudged = false;
        if (x == -1) {
            points[offset] = 0;
            nudged = true
        } else {
            if (x == width) {
                points[offset] = width - 1;
                nudged = true
            }
        }
        if (y == -1) {
            points[offset + 1] = 0;
            nudged = true
        } else {
            if (y == height) {
                points[offset + 1] = height - 1;
                nudged = true
            }
        }
    }
};
