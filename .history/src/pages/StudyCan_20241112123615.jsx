import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import OurAssociates from '../components/OurAssociates';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { AnimatePresence } from 'framer-motion';

const points = [
  { title: 'Globally Acclaimed Institutes', description: 'Canadian universities and colleges are renowned for their advanced pedagogical methods & enhanced learning experiences.' },
  { title: 'Post Study Work Options', description: 'The country offers work opportunities to students for up to 3 years after graduation, helping them gain international work experience.' },
  { title: 'Affordable Tuition Fee and Living Cost', description: 'The average course fee and expenses one incurs for living in Canada are less compared to other study abroad destinations.' },
  { title: