/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("cars").del();
	await knex("cars").insert([
		{ brand: "Toyota", model: "Corolla", plate: "ABC-1A23", year: 2018 },
		{ brand: "Honda", model: "Civic", plate: "DEF-2B34", year: 2020 },
		{ brand: "Ford", model: "Mustang", plate: "GHI-3C45", year: 2017 },
		{ brand: "Chevrolet", model: "Cruze", plate: "JKL-4D56", year: 2019 },
		{ brand: "Hyundai", model: "Elantra", plate: "MNO-5E67", year: 2021 },
		{ brand: "Nissan", model: "Sentra", plate: "PQR-6F78", year: 2015 },
		{ brand: "Volkswagen", model: "Jetta", plate: "STU-7G89", year: 2016 },
		{ brand: "Renault", model: "Kwid", plate: "VWX-8H90", year: 2022 },
		{ brand: "Fiat", model: "Uno", plate: "YZA-9I01", year: 2014 },
		{ brand: "Jeep", model: "Compass", plate: "BCD-0J12", year: 2023 },
	]);
};
