const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseToken = process.env.SUPABASE_AUTORIZACION;

const supabase = createClient(supabaseUrl, supabaseKey, {
    authToken: supabaseToken,
});

module.exports = supabase;