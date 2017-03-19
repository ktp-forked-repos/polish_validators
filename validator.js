function Validator() {
	this.isValidPesel = function(pesel) {
		var regex = /^\d{11}$/;

		if (!regex.test(pesel)) {
			return false;
		}

		var magic = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
		var sum = 0;

		for (var i = 0; i < magic.length; i++) {
			sum += magic[i] * parseInt(pesel.substring(i, i + 1), 10);
		}

		sum %= 10;
		var checksum = parseInt(pesel.substring(10, 11), 10);

		if (sum == checksum) {
			return true;
		}
		else {
			return false;
		}
	}
	
	this.isValidNip = function (nip) {
		var regex = /^\d{10}$/;

		if (!regex.test(nip)) {
			return false;
		}

		var magic = [6, 5, 7, 2, 3, 4, 5, 6, 7];
		var sum = 0;

		for (var i = 0; i < magic.length; i++) {
			sum += magic[i] * parseInt(nip.substring(i, i + 1), 10);
		}

		sum %= 11;
		var checksum = parseInt(nip.substring(9, 10), 10);

		if (sum == checksum) {
			return true;
		}
		else {
			return false;
		}
	}

	this.isValidRegon = function (regon) {
		var regex = /^\d{14}|\d{9}$/;

		if (!regex.test(regon)) {
			return false;
		}

		var magic9 = [8, 9, 2, 3, 4, 5, 6, 7];
		var magic14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];

		if (regon.length == 9) {
			var sum = 0;

			for (var i = 0; i < magic9.length; i++) {
				sum += magic9[i] * parseInt(regon.substring(i, i + 1), 10);
			}

			sum %= 11;
			var checksum = parseInt(regon.substring(8, 9), 10);

			if (sum == 10) {
				sum = 0;
			}

			if (sum == checksum) {
				return true;
			}
			else {
				return false;
			}
		}

		if (regon.length == 14) {
			var sum = 0;

			for (var i = 0; i < magic14.length; i++) {
				sum += magic14[i] * parseInt(regon.substring(i, i + 1), 10);
			}

			sum %= 11;
			var checksum = parseInt(regon.substring(13, 14), 10);

			if (sum == 10) {
				sum = 0;
			}

			if (sum == checksum) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}
