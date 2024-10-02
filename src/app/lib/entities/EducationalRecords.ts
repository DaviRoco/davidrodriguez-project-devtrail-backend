import Records from "./Records";
import Skills from "./Skills";
/**
 * Represents an educational record with its details.
 *
 * @class EducationalRecords with Records as its parent class
 *
 * @property {string} _id - The unique identifier of the record.
 * @property {Date} _startDate - The start date of the record.
 * @property {Date} _endDate - The end date of the record.
 * @property {string} _description - A brief description of the record.
 * @property {Skills[]} _skills - An array of skills associated with the record.
 * @property {string} _name - The name of the educational institution.
 * @property {string} _degree - The degree obtained.
 *
 * @constructor
 * @param {string} id - The unique identifier of the record.
 * @param {Date} startDate - The starting date of the record.
 * @param {Date} endDate - The ending date of the record.
 * @param {string} description - A brief description of the record.
 * @param {Skills[]} skills - The skills associated with the record.
 * @param {string} name - The name of the educational institution.
 * @param {string} degree - The degree obtained.
 *
 * @method get name
 * @returns {string} The name of the educational institution.
 *
 * @method get degree
 * @returns {string} The degree obtained.
 */
class EducationalRecords extends Records {
  _name: string;
  _degree: string;

  constructor(
    id: string,
    startDate: Date,
    endDate: Date,
    description: string,
    skills: Skills[],
    name: string,
    degree: string,
  ) {
    super(id, startDate, endDate, description, skills);
    this._name = name;
    this._degree = degree;
  }

  get name() {
    return this._name;
  }

  get degree() {
    return this._degree;
  }
}

export default EducationalRecords;
