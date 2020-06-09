var express = require('express');
var router = express.Router();
const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:b@dpassword@localhost:5432/final',
    ssl: process.env.DATABASE_URL ? true : false
})


  
router.get('/', async (req, res) => {
    try {
      const client = await pool.connect();
	  const result = await client.query('SELECT district, round(avg(ATLIBENGLISH)) as avg FROM ATLIB GROUP BY district ORDER BY AVG(ATLIBENGLISH) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('index', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  

router.get('/funding', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT funding, round(AVG(pse)) as avg FROM PSE GROUP BY funding ORDER BY AVG(pse) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('funding', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
router.get('/municipality', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT municipality, round(AVG(pse)) as avg FROM PSE GROUP BY municipality ORDER BY AVG(pse) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('municipality', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/ur', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT urbanrural, round(AVG(pse)) as avg FROM PSE GROUP BY urbanrural ORDER BY AVG(pse) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('ur', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/management', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT management, round(AVG(pse)) as avg FROM PSE GROUP BY management ORDER BY AVG(pse) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('management', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/school', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT pseschoolname, round(AVG(pse)) as avg FROM PSE GROUP BY pseschoolname ORDER BY AVG(pse) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('school', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  
  
  
  

  
router.get('/bfunding', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT funding, round(AVG(bjat)) as avg FROM BJAT GROUP BY funding ORDER BY AVG(bjat) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('bfunding', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
router.get('/bmunicipality', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT municipality, round(AVG(bjat)) as avg FROM bjat GROUP BY municipality ORDER BY AVG(bjat) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('bmunicipality', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/bur', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT urbanrural, round(AVG(bjat)) as avg FROM bjat GROUP BY urbanrural ORDER BY AVG(bjat) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('bur', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/bmanagement', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT management, round(AVG(bjat)) as avg FROM bjat GROUP BY management ORDER BY AVG(bjat) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('bmanagement', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/bschool', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT pseschoolname, round(AVG(bjat)) as avg FROM bjat GROUP BY pseschoolname ORDER BY AVG(bjat) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('bschool', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  
  
  
  
    
router.get('/pfunding', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT funding, round(AVG(atlibmath)) as avg FROM ATLIB GROUP BY funding ORDER BY AVG(atlibmath) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('afunding', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
router.get('/pmunicipality', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT municipality, round(AVG(ATLIBMATH)) as avg FROM ATLIB GROUP BY municipality ORDER BY AVG(atlibmath) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('amunicipality', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/pur', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT urbanrural, round(AVG(atlibmath)) as avg FROM ATLIB GROUP BY urbanrural ORDER BY AVG(atlibmath) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('aur', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/pmanagement', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT management, round(AVG(atlibmath)) as avg FROM ATLIB GROUP BY management ORDER BY AVG(atlibmath) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('amanagement', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  router.get('/pschool', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT pseschoolname, round(AVG(atlibmath)) as avg FROM ATLIB GROUP BY pseschoolname ORDER BY AVG(atlibmath) DESC');
      const results = { 'results': (result) ? result.rows : null};
      res.render('aschool', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
module.exports = router;
