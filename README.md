# Compound Interest Calculator

A modern, interactive compound interest calculator built with React, TypeScript, and Shadcn UI. This tool helps you visualize how your investments can grow over time with the power of compound interest.

<div align="center">
  <img src="public/images/calculator-interface.png" alt="Calculator Interface" width="800"/>
</div>

## Features

- **Modern UI**: Built with Shadcn UI and Tailwind CSS for a clean, responsive design
- **Interactive Visualization**: Dynamic charts that update in real-time as you input values
- **Advanced Options**:
  - Adjustable contribution frequency (monthly, quarterly, annually)
  - Inflation adjustment
  - Detailed breakdown of contributions vs. interest
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **TypeScript**: Type-safe codebase for better maintainability

### Form Inputs

<div align="center">
  <img src="public/images/form-inputs.png" alt="Calculator Form Inputs" width="600"/>
</div>

### Investment Summary

<div align="center">
  <img src="public/images/investment-summary-light.png" alt="Investment Summary - Light Mode" width="400"/>
  <img src="public/images/investment-summary-dark.png" alt="Investment Summary - Dark Mode" width="400"/>
</div>

### Growth Charts

#### Area Chart Visualization

<div align="center">
  <img src="public/images/chart-area-light.png" alt="Area Chart - Light Mode" width="400"/>
  <img src="public/images/chart-area-dark.png" alt="Area Chart - Dark Mode" width="400"/>
</div>

#### Bar Chart Visualization

<div align="center">
  <img src="public/images/chart-bar-light.png" alt="Bar Chart - Light Mode" width="400"/>
  <img src="public/images/chart-bar-dark.png" alt="Bar Chart - Dark Mode" width="400"/>
</div>

### Responsive Design

The calculator adapts to different screen sizes and provides a consistent experience across devices.

<div align="center">
  <img src="public/images/responsive-view.png" alt="Responsive Design Example" width="600"/>
</div>

## Demo

[Live Demo](https://compound-calculator.example.com) (Coming Soon)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kevinduhamelhayes/Calc-int-compuesto.git
   cd Calc-int-compuesto
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter your initial deposit amount
2. Specify your regular contribution amount
3. Select the frequency of your contributions (monthly, quarterly, annually)
4. Enter the number of years you plan to invest
5. Specify the expected annual interest rate
6. Optionally, adjust for inflation
7. Click "Calculate" to see the results

The calculator will display:
- Total value at the end of the investment period
- Breakdown of contributions versus interest earned
- Year-by-year growth charts

## Technologies Used

- **Frontend Framework**: React
- **Language**: TypeScript
- **State Management**: React Hooks
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Form Validation**: Formik & Yup
- **Charts**: Recharts
- **Build Tool**: Vite

## Roadmap

- [ ] Add ability to save calculations
- [ ] Export results as PDF or CSV
- [ ] Compare multiple investment scenarios
- [ ] Add more investment types and calculation methods
- [ ] Implement user authentication for saved calculations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original project by [Kevin Duhamel Hayes](https://github.com/kevinduhamelhayes)
- Refactored and modernized with assistance from the community
