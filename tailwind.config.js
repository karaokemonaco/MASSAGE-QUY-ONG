module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#2B2B2B",
        footer: "#3B3B3B",
        popular: "#A259FF",
        goldDark: "#A37D2B", // Vàng đậm
        goldLight: "#FFD700", // Vàng sáng
         customRed: '#92171a',
      },
      scale: {
        '500': '12',
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      fontSize: {
        medium: "17px",
      },
      clipPath: {
        diagonal: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)", // Vát chéo từ dưới lên
      },
      screens: {
        '3xl': '1800px', // Thêm breakpoint mới cho màn lớn hơn
      },
      keyframes: {
        blink: {
          '0%': { color: '#EF4444' },  // Đỏ (red-600)
          '50%': { color: '#F59E0B' }, // Vàng (yellow-600)
          '100%': { color: '#EF4444' }, // Đỏ (red-600)
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px #FFD700" },
          "50%": { boxShadow: "0 0 30px #A37D2B" },
        },
        goldBorder: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        goldShine: {
          '0%': { color: '#FFD700' }, // Vàng sáng
          '25%': { color: '#A37D2B' }, // Vàng đậm
          '50%': { color: '#FFD700' }, // Vàng sáng
          '75%': { color: '#A37D2B' }, // Vàng đậm
          '100%': { color: '#FFD700' }, // Vàng sáng
        },
      },
      animation: {
        blink: 'blink 0.4s steps(1) infinite', // Sử dụng steps để nhấp nháy ngay lập tức
        shake: 'shake 0.5s ease-in-out infinite', // Hiệu ứng rung
        gradient: 'gradient 6s ease infinite', // Hiệu ứng gradient chuyển động
        glow: "glow 2s infinite alternate", // Hiệu ứng glow
        goldBorder: "goldBorder 3s ease infinite", // Hiệu ứng border vàng
        goldShine: "goldShine 2s infinite alternate", // Hiệu ứng vàng đậm nhạt
      },
      boxShadow: {
        'frame': '0 0 0 4px rgba(255, 0, 0, 0.5)', // Thêm hiệu ứng khung (frame) màu đỏ
        'frame-yellow': '0 0 0 4px rgba(255, 255, 0, 0.5)', // Thêm hiệu ứng khung (frame) màu vàng
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #FFD700, #A37D2B)",
      },
      borderImage: {
        "gold-gradient": "linear-gradient(90deg, #FFD700, #A37D2B)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
